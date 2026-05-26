import { createContext, useContext, useEffect, useState } from 'react';

interface DemoUser {
  id: string;
  email: string;
  fullName: string;
  company?: string;
}

interface AuthContextType {
  user: DemoUser | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, company?: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('demoUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signUp = async (email: string, password: string, fullName: string, company?: string) => {
    if (!email || !password || !fullName) {
      throw new Error('All required fields must be filled');
    }

    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }

    const newUser: DemoUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      fullName,
      company: company || '',
    };

    localStorage.setItem('demoUser', JSON.stringify(newUser));
    setUser(newUser);
  };

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (!email.includes('@')) {
      throw new Error('Please enter a valid email');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const demoUser: DemoUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      fullName: email.split('@')[0],
      company: '',
    };

    localStorage.setItem('demoUser', JSON.stringify(demoUser));
    setUser(demoUser);
  };

  const signOut = async () => {
    localStorage.removeItem('demoUser');
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    if (!email.includes('@')) {
      throw new Error('Please enter a valid email');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
