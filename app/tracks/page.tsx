import Link from 'next/link';
import { TrackCard } from '@/components/TrackCard';
import { Track } from '@/types';

// Mock data for tracks
const MOCK_TRACKS: Track[] = [
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
  {
    id: '4',
    title: 'Rise and Grind',
    artist: 'Motivate MC',
    audioUrl: '/sample-track-4.mp3',
    downloadUrl: '/download/rise-and-grind.mp3',
    uploadedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 195,
    genre: 'Conscious',
    hasLyrics: true,
    language: 'English',
    userId: '4',
  },
  {
    id: '5',
    title: 'Neon Nights',
    artist: 'Synth Wave Beats',
    producer: 'Beat Wizard',
    audioUrl: '/sample-track-5.mp3',
    downloadUrl: '/download/neon-nights.mp3',
    uploadedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 220,
    genre: 'Trap',
    hasLyrics: false,
    language: 'English',
    userId: '5',
  },
  {
    id: '6',
    title: 'Classic Soul Sample',
    artist: 'Dusty Crates',
    audioUrl: '/sample-track-6.mp3',
    downloadUrl: '/download/classic-soul.mp3',
    uploadedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 165,
    genre: 'Boom Bap',
    hasLyrics: false,
    language: 'English',
    userId: '6',
  },
  {
    id: '7',
    title: 'Digital Dreams',
    artist: 'Cyber Sound',
    producer: 'Future Tech',
    audioUrl: '/sample-track-7.mp3',
    downloadUrl: '/download/digital-dreams.mp3',
    uploadedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 205,
    genre: 'Experimental',
    hasLyrics: true,
    language: 'English',
    userId: '7',
  },
  {
    id: '8',
    title: 'Concrete Jungle',
    artist: 'Street Legend',
    audioUrl: '/sample-track-8.mp3',
    downloadUrl: '/download/concrete-jungle.mp3',
    uploadedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 240,
    genre: 'Hip-Hop',
    hasLyrics: true,
    language: 'English',
    userId: '8',
  },
  {
    id: '9',
    title: 'Ethereal Vibes',
    artist: 'Ambient Beats',
    audioUrl: '/sample-track-9.mp3',
    downloadUrl: '/download/ethereal-vibes.mp3',
    uploadedAt: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
    duration: 260,
    genre: 'Ambient',
    hasLyrics: false,
    language: 'Instrumental',
    userId: '9',
  },
];

export default function TracksPage() {
  return (
    <main className="flex-1 px-4 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Explore Tracks</h1>
          <p className="text-gray-400 text-lg">
            Discover fresh demos and bars from talented artists worldwide. Download, remix, and build on amazing sounds.
          </p>
        </div>

        {/* Filters/Info Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="text-sm text-gray-300">
            Showing <span className="text-yellow-400 font-medium">{MOCK_TRACKS.length}</span> tracks
          </div>
          <Link
            href="/upload"
            className="text-sm font-medium text-white bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            + Share Your Track
          </Link>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TRACKS.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition">
            Load More Tracks
          </button>
        </div>

        {/* Back to Home */}
        <div className="text-center pt-8 border-t border-gray-800">
          <Link href="/" className="text-sm text-gray-400 hover:text-yellow-400 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
