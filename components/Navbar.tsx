'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export const Navbar: React.FC = () => {
  const { authState, logout } = useAuth();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowMenu(false);
    router.push('/');
  };

  const handleUploadClick = (e: React.MouseEvent) => {
    if (!authState.isLoggedIn) {
      e.preventDefault();
      router.push('/login');
    }
  };

  const handleProfileClick = (e: React.MouseEvent) => {
    if (!authState.isLoggedIn) {
      e.preventDefault();
      router.push('/login');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl hover:opacity-80 transition">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
            B
          </div>
          <span className="text-white">Barz</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition">
            About
          </Link>
          <Link
            href="/upload"
            onClick={handleUploadClick}
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Upload
          </Link>
          {authState.isLoggedIn ? (
            <>
              <Link href="/profile" className="text-gray-300 hover:text-yellow-400 transition">
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-yellow-400 hover:text-yellow-300 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-3">
          <Link href="/about" className="block text-gray-300 hover:text-yellow-400 transition py-2">
            About
          </Link>
          <Link
            href="/upload"
            onClick={handleUploadClick}
            className="block text-gray-300 hover:text-yellow-400 transition py-2"
          >
            Upload
          </Link>
          {authState.isLoggedIn ? (
            <>
              <Link href="/profile" className="block text-gray-300 hover:text-yellow-400 transition py-2">
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition text-center"
            >
              Log In
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
