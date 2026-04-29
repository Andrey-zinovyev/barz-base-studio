import React from 'react';
import { Track } from '@/types';

interface TrackCardProps {
  track: Track;
}

export const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition border border-gray-800">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-white">{track.title}</h3>
            <p className="text-sm text-gray-400">{track.artist}</p>
            {track.producer && <p className="text-xs text-gray-500">Prod. by {track.producer}</p>}
          </div>
          {track.genre && <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">{track.genre}</span>}
        </div>
      </div>

      {/* Audio Player */}
      <div className="mb-4 bg-gray-800 rounded-lg p-4">
        <audio
          controls
          className="w-full"
          src={track.audioUrl}
        >
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <span>{formatDuration(track.duration)}</span>
        <span>{track.language}</span>
        <span>{formatDate(track.uploadedAt)}</span>
      </div>

      {/* Lyrics info */}
      {!track.hasLyrics && (
        <div className="mb-4 text-xs text-gray-400 flex items-center gap-2">
          <span>🔤</span>
          <span>No lyrics</span>
        </div>
      )}

      {/* Download Button */}
      <a
        href={track.downloadUrl}
        className="inline-block w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition text-center text-sm"
      >
        ⬇️ Download
      </a>
    </div>
  );
};
