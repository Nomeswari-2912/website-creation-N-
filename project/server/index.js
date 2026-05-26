import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;
const dataFolder = path.resolve(process.cwd(), 'server', 'data');
const contactsFile = path.join(dataFolder, 'contacts.json');

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
    return res.json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    console.error('Unable to store contact message:', error);
    return res.status(500).json({ message: 'Unable to store contact message.' });
  }
});

app.get('*', (req, res) => {
  const indexPath = path.resolve(process.cwd(), 'dist', 'index.html');
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
