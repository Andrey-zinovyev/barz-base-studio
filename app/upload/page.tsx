'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const { authState } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    artistName: '',
    producerName: '',
    noLyrics: false,
    lyrics: '',
    language: 'English',
  });
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [projectFile, setProjectFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authState.isLoggedIn) {
      router.push('/login');
    }
  }, [authState.isLoggedIn, router]);

  const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac'].includes(file.type)) {
      setAudioFile(file);
      setErrors((prev) => ({ ...prev, audioFile: '' }));
    } else {
      setErrors((prev) => ({ ...prev, audioFile: 'Please select a valid audio file (mp3, wav, ogg, flac)' }));
    }
  };

  const handleProjectFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProjectFile(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Track title is required';
    if (!formData.artistName.trim()) newErrors.artistName = 'Artist name is required';
    if (!audioFile) newErrors.audioFile = 'Audio file is required';
    if (!formData.noLyrics && !formData.lyrics.trim()) newErrors.lyrics = 'Lyrics are required or check "No lyrics"';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Mock upload - in production would send to Supabase
    console.log('Track submitted:', {
      ...formData,
      audioFile: audioFile?.name,
      projectFile: projectFile?.name,
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        title: '',
        artistName: '',
        producerName: '',
        noLyrics: false,
        lyrics: '',
        language: 'English',
      });
      setAudioFile(null);
      setProjectFile(null);
      router.push('/profile');
    }, 2000);
  };

  if (!authState.isLoggedIn) {
    return null;
  }

  return (
    <main className="flex-1 px-4 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Upload Your Track</h1>
          <p className="text-gray-400">Share your demo and let others build on it</p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="bg-green-900 border border-green-700 rounded-lg p-4 text-green-100 flex items-center gap-2">
            ✅ <span>Track uploaded successfully! Redirecting to your profile...</span>
          </div>
        )}

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Track Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Track Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Golden Hour Freestyle"
              className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition ${
                errors.title ? 'border-red-500' : 'border-gray-700'
              }`}
            />
            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Artist & Producer Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Artist Name *
              </label>
              <input
                type="text"
                name="artistName"
                value={formData.artistName}
                onChange={handleInputChange}
                placeholder="Your artist name"
                className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition ${
                  errors.artistName ? 'border-red-500' : 'border-gray-700'
                }`}
              />
              {errors.artistName && <p className="text-red-400 text-sm mt-1">{errors.artistName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Producer Name (Optional)
              </label>
              <input
                type="text"
                name="producerName"
                value={formData.producerName}
                onChange={handleInputChange}
                placeholder="Beat producer name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>
          </div>

          {/* Audio File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Audio File * (mp3, wav, ogg, flac)
            </label>
            <div className="relative">
              <input
                type="file"
                accept="audio/*"
                onChange={handleAudioFileChange}
                className="sr-only"
                id="audio-input"
              />
              <label
                htmlFor="audio-input"
                className={`block w-full px-4 py-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition ${
                  errors.audioFile
                    ? 'border-red-500 bg-red-900/10'
                    : 'border-gray-700 hover:border-yellow-400 hover:bg-gray-800'
                }`}
              >
                <div className="text-gray-400">
                  {audioFile ? (
                    <div>
                      <div className="text-2xl mb-2">✅</div>
                      <p className="text-white font-medium">{audioFile.name}</p>
                      <p className="text-sm text-gray-500">{(audioFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-2xl mb-2">🎵</div>
                      <p className="text-sm">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">mp3, wav, ogg or flac (max 100MB)</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            {errors.audioFile && <p className="text-red-400 text-sm mt-1">{errors.audioFile}</p>}
          </div>

          {/* Lyrics Section */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="noLyrics"
                checked={formData.noLyrics}
                onChange={handleInputChange}
                className="w-4 h-4 accent-yellow-400"
              />
              <span className="text-sm font-medium text-gray-300">No lyrics on this track</span>
            </label>

            {!formData.noLyrics && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Lyrics *
                </label>
                <textarea
                  name="lyrics"
                  value={formData.lyrics}
                  onChange={handleInputChange}
                  placeholder="Enter the lyrics or paste them here..."
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition ${
                    errors.lyrics ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.lyrics && <p className="text-red-400 text-sm mt-1">{errors.lyrics}</p>}
              </div>
            )}
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Language
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Portuguese</option>
              <option>Other</option>
            </select>
          </div>

          {/* Project File */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project File (Optional)
            </label>
            <p className="text-xs text-gray-500 mb-3">FL Studio, Ableton, Logic Pro, etc.</p>
            <div className="relative">
              <input
                type="file"
                onChange={handleProjectFileChange}
                className="sr-only"
                id="project-input"
              />
              <label
                htmlFor="project-input"
                className="block w-full px-4 py-3 border-2 border-dashed border-gray-700 rounded-lg text-center cursor-pointer hover:border-yellow-400 hover:bg-gray-800 transition"
              >
                <div className="text-gray-400">
                  {projectFile ? (
                    <span className="text-white font-medium">{projectFile.name}</span>
                  ) : (
                    <span className="text-sm">📁 Click to upload project file</span>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500 transition text-lg"
          >
            🚀 Upload Track
          </button>
        </form>

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
