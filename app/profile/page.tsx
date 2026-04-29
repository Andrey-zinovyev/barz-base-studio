'use client';

import React from 'react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TrackCard } from '@/components/TrackCard';
import { Track } from '@/types';

// Mock user tracks
const MOCK_USER_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Golden Hour Freestyle',
    artist: 'demouser',
    producer: 'Beat Maker Pro',
    audioUrl: '/sample-track-1.mp3',
    downloadUrl: '/download/golden-hour.mp3',
    uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 245,
    genre: 'Trap',
    hasLyrics: true,
    language: 'English',
    userId: '1',
  },
  {
    id: '2',
    title: 'Midnight Cipher',
    artist: 'demouser',
    audioUrl: '/sample-track-2.mp3',
    downloadUrl: '/download/midnight-cipher.mp3',
    uploadedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 180,
    genre: 'Boom Bap',
    hasLyrics: false,
    language: 'English',
    userId: '1',
  },
];

// Mock saved/favorite tracks
const MOCK_SAVED_TRACKS: Track[] = [
  {
    id: '3',
    title: 'Street Ambition',
    artist: 'Urban Poet',
    audioUrl: '/sample-track-3.mp3',
    downloadUrl: '/download/street-ambition.mp3',
    uploadedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 210,
    genre: 'Drill',
    hasLyrics: true,
    language: 'English',
    userId: '2',
  },
];

export default function ProfilePage() {
  const { authState } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!authState.isLoggedIn) {
      router.push('/login');
    }
  }, [authState.isLoggedIn, router]);

  if (!authState.isLoggedIn || !authState.user) {
    return null;
  }

  return (
    <main className="flex-1 px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Profile Header */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Profile Picture */}
            <img
              src={authState.user.profilePicture || `https://avatars.dicebear.com/api/avataaars/${authState.user.username}.svg`}
              alt={authState.user.username}
              className="w-24 h-24 rounded-full border-4 border-yellow-400"
            />

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{authState.user.username}</h1>
              <p className="text-gray-400 mb-4">{authState.user.bio || 'Music producer and collaborator'}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition">
                  Edit Profile
                </button>
                <button className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg font-medium hover:bg-gray-800 transition">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="space-y-8">
          {/* My Tracks Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">My Tracks</h2>
              <Link
                href="/upload"
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition text-sm"
              >
                + Upload New
              </Link>
            </div>

            {MOCK_USER_TRACKS.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_USER_TRACKS.map((track) => (
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            ) : (
              <div className="text-center bg-gray-900 rounded-lg p-12 border border-gray-800">
                <p className="text-gray-400 mb-4">You haven't uploaded any tracks yet</p>
                <Link
                  href="/upload"
                  className="inline-block px-6 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition"
                >
                  Upload Your First Track
                </Link>
              </div>
            )}
          </section>

          {/* Saved Tracks Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Saved Tracks</h2>

            {MOCK_SAVED_TRACKS.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_SAVED_TRACKS.map((track) => (
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            ) : (
              <div className="text-center bg-gray-900 rounded-lg p-12 border border-gray-800">
                <p className="text-gray-400 mb-4">You haven't saved any tracks yet</p>
                <Link
                  href="/tracks"
                  className="inline-block px-6 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition"
                >
                  Explore Tracks
                </Link>
              </div>
            )}
          </section>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-yellow-400 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
