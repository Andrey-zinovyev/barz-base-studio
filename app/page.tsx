import { Button } from '@/components/Button';
import { TrackCard } from '@/components/TrackCard';
import { ProfileCard } from '@/components/ProfileCard';
import { Track, User } from '@/types';

// Mock trending tracks
const TRENDING_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Golden Hour Freestyle',
    artist: 'Jay Beats',
    producer: 'Beat Master',
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
    artist: 'Cipher Collective',
    audioUrl: '/sample-track-2.mp3',
    downloadUrl: '/download/midnight-cipher.mp3',
    uploadedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 180,
    genre: 'Boom Bap',
    hasLyrics: true,
    language: 'English',
    userId: '2',
  },
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
    userId: '3',
  },
];

// Mock popular creators
const POPULAR_CREATORS: User[] = [
  {
    id: '1',
    username: 'Jay Beats',
    email: 'jay@example.com',
    profilePicture: 'https://avatars.dicebear.com/api/avataaars/jaybeats.svg',
    bio: 'Producer | Beat Maker | Music Enthusiast',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    username: 'Cipher Collective',
    email: 'cipher@example.com',
    profilePicture: 'https://avatars.dicebear.com/api/avataaars/ciphercollective.svg',
    bio: 'Rap Group | Beat Flipper | Sound Explorer',
    createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    username: 'Urban Poet',
    email: 'urban@example.com',
    profilePicture: 'https://avatars.dicebear.com/api/avataaars/urbanpoet.svg',
    bio: 'Lyricist | Storyteller | Movement Builder',
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    username: 'Synth Wave',
    email: 'synth@example.com',
    profilePicture: 'https://avatars.dicebear.com/api/avataaars/synthwave.svg',
    bio: 'Electronic Producer | Sound Designer | Innovator',
    createdAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Let others finish your demo.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed">
              Upload your bars. Let the world build on your sound.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button href="/upload" variant="primary" className="text-lg px-8 py-4">
              🎤 Upload Track
            </Button>
            <Button href="/tracks" variant="secondary" className="text-lg px-8 py-4">
              🎵 Explore Tracks
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">500+</div>
              <p className="text-sm text-gray-400">Tracks</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">200+</div>
              <p className="text-sm text-gray-400">Artists</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">1k+</div>
              <p className="text-sm text-gray-400">Collabs</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <p className="text-sm text-gray-400">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Tracks Section */}
      <section className="px-4 py-20 sm:py-24 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">🔥 Trending Tracks</h2>
              <p className="text-gray-400">Hottest demos right now</p>
            </div>
            <Button href="/tracks" variant="secondary" className="text-sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRENDING_TRACKS.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Creators Section */}
      <section className="px-4 py-20 sm:py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">⭐ Popular Creators</h2>
            <p className="text-gray-400">Follow talented artists in our community</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_CREATORS.map((creator) => (
              <ProfileCard key={creator.id} user={creator} />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-4 py-20 sm:py-24 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Ready to Collaborate?</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Join thousands of artists who are sharing, remixing, and creating together. No limits. No gatekeeping. Just music.
          </p>
          <Button href="/upload" variant="secondary" className="text-lg px-8 py-4 border-black text-black hover:bg-black hover:text-yellow-400">
            Start Uploading Now
          </Button>
        </div>
      </section>
    </main>
  );
}