'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthState, User } from '@/types';

interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database
const MOCK_USERS: Record<string, User & { password: string }> = {
  'demo@example.com': {
    id: '1',
    username: 'demouser',
    email: 'demo@example.com',
    password: 'password',
    profilePicture: 'https://avatars.dicebear.com/api/avataaars/demouser.svg',
    bio: 'Music producer and beat maker',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    user: null,
    loading: false,
  });

  const login = async (email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, loading: true }));
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const user = MOCK_USERS[email];
    if (user && user.password === password) {
      const { password: _, ...userWithoutPassword } = user;
      setAuthState({
        isLoggedIn: true,
        user: userWithoutPassword,
        loading: false,
      });
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const register = async (username: string, email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, loading: true }));
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (MOCK_USERS[email]) {
      throw new Error('Email already registered');
    }

    const newUser: User & { password: string } = {
      id: String(Object.keys(MOCK_USERS).length + 1),
      username,
      email,
      password,
      profilePicture: `https://avatars.dicebear.com/api/avataaars/${username}.svg`,
      bio: '',
      createdAt: new Date().toISOString(),
    };

    MOCK_USERS[email] = newUser;
    const { password: _, ...userWithoutPassword } = newUser;
    setAuthState({
      isLoggedIn: true,
      user: userWithoutPassword,
      loading: false,
    });
  };

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      user: null,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
