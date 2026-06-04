import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const dataFolder = path.resolve(process.cwd(), 'server', 'data');
const contactsFile = path.join(dataFolder, 'contacts.json');

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === 'true';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const emailReceiver = process.env.EMAIL_RECEIVER || 'info@nimbusgurus.in';
const emailFrom = process.env.EMAIL_FROM || `no-reply@${process.env.EMAIL_DOMAIN || 'localhost'}`;

let transporter;
const smtpConfigured = Boolean(smtpHost && smtpUser && smtpPass);
if (smtpConfigured) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  transporter.verify().then(() => {
    console.log('SMTP configuration is valid and ready to send mail.');
  }).catch((err) => {
    console.warn('SMTP configuration is invalid:', err.message || err);
  });
} else {
  console.log('SMTP is not configured. Contact form submissions will be saved but email delivery will not occur.');
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(process.cwd(), 'dist')));

async function ensureDataFile() {
  try {
    await fs.mkdir(dataFolder, { recursive: true });
    await fs.access(contactsFile);
  } catch (error) {
    await fs.writeFile(contactsFile, '[]', 'utf-8');
  }
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Name, email, subject, and message are required.' });
  }

  const newContact = {
    id: Date.now(),
    name,
    email,
    phone: phone || '',
    subject,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    await ensureDataFile();
    const contents = await fs.readFile(contactsFile, 'utf-8');
    const contacts = JSON.parse(contents || '[]');
    contacts.push(newContact);
    await fs.writeFile(contactsFile, JSON.stringify(contacts, null, 2), 'utf-8');

    if (smtpConfigured) {
      const mailOptions = {
        from: emailFrom,
        to: emailReceiver,
        replyTo: email,
        subject: `New contact request from ${name}: ${subject}`,
        text: `You have a new contact request from ${name} (${email}, ${phone || 'no phone provided'}).

Subject: ${subject}

Message:
${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br />')}</p>`,
      };

      await transporter.sendMail(mailOptions);

      if (email) {
        const confirmationOptions = {
          from: emailFrom,
          to: email,
          subject: 'NimbusGurus: We received your message',
          text: `Hi ${name},

Thanks for reaching out to NimbusGurus. We received your message and will reply as soon as possible.

Subject: ${subject}

Message:
${message}

If you need to reach us directly, reply to this email or contact ${emailReceiver}.`,
          html: `<p>Hi ${name},</p>
                 <p>Thanks for reaching out to NimbusGurus. We received your message and will reply as soon as possible.</p>
                 <p><strong>Subject:</strong> ${subject}</p>
                 <p><strong>Message:</strong></p>
                 <p>${message.replace(/\n/g, '<br />')}</p>
                 <p>If you need to reach us directly, reply to this email or contact ${emailReceiver}.</p>`,
        };

        await transporter.sendMail(confirmationOptions);
      }
    }

    return res.json({
      success: true,
      emailDeliveryConfigured: smtpConfigured,
      message: smtpConfigured
        ? 'Message received and email sent successfully.'
        : 'Message received successfully. Email delivery is not configured yet. Please add SMTP settings to .env if you want emails delivered to the provided address.',
    });
  } catch (error) {
    console.error('Unable to store contact message:', error);
    return res.status(500).json({ message: 'Unable to process contact message.' });
  }
});

app.get('*', (req, res) => {
  const indexPath = path.resolve(process.cwd(), 'dist', 'index.html');
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
