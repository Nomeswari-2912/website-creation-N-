import { useState } from 'react';
import { Mail, Loader, AlertCircle, CheckCircle, Layers3, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ForgotPasswordProps {
  onSwitchToLogin: () => void;
}

export default function ForgotPassword({ onSwitchToLogin }: ForgotPasswordProps) {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      await resetPassword(email);
      setSuccess(true);
      setEmail('');
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>

            <div className="relative flex items-center gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-lg">
                <Layers3 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">NimbusGurus</h1>
                <p className="text-sm text-orange-100">Powering the Digital Future</p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Reset Password</h2>
              <p className="text-slate-600">Enter your email and we'll send you a reset link</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800 font-semibold">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-800 font-semibold">
                  <p className="mb-1">Check your email!</p>
                  <p className="text-xs font-normal">Password reset instructions have been sent to {email}</p>
                </div>
              </div>
            )}

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-slate-50 hover:border-slate-300"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending Link...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-4 text-center">
                <p className="text-slate-600">
                  Check your email inbox and spam folder for the reset link. Click the link to create a new password.
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={onSwitchToLogin}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Back to Sign In
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={onSwitchToLogin}
              className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 text-slate-700 font-semibold hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Sign In
            </button>

            <p className="text-xs text-slate-500 text-center mt-6">
              Remember your password? <button onClick={onSwitchToLogin} className="text-orange-600 font-semibold hover:underline">Sign in here</button>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-orange-200 text-sm font-semibold">Account Recovery</p>
          <p className="text-orange-100 text-xs mt-1">We'll help you regain access to your NimbusGurus account</p>
        </div>
      </div>
    </div>
  );
}
