import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Barz Base Studio</h1>
          <p className="text-xl text-gray-400">
            A collaborative music platform where creativity has no limits
          </p>
        </div>

        {/* Mission Section */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Barz Base Studio is dedicated to democratizing music production and collaboration. We believe that
              great music comes from great collaboration, regardless of geography or experience level. Our platform
              empowers artists to share their creative work and builds a community where producers, rappers, and
              musicians can work together to create something extraordinary.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Upload Your Demo</h3>
                  <p className="text-gray-400">
                    Artists upload their rap demos, beats, or incomplete tracks. No limits on creativity or format.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Share with Collaborators</h3>
                  <p className="text-gray-400">
                    Other artists discover your work and can download the stems or project files to build upon them.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Collaborate & Remix</h3>
                  <p className="text-gray-400">
                    Remix, extend, or add your own twist to existing tracks. Credit is always given to original creators.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Build Your Community</h3>
                  <p className="text-gray-400">
                    Connect with producers, engineers, and vocalists. Grow your fanbase and release collaborative work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">🎨 Creativity</h3>
                <p className="text-gray-400">We celebrate all forms of musical expression and encourage experimentation.</p>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">🤝 Collaboration</h3>
                <p className="text-gray-400">Great music comes from working together. Community over competition.</p>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">⚖️ Fairness</h3>
                <p className="text-gray-400">Every creator deserves credit for their work and fair compensation.</p>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">🌍 Accessibility</h3>
                <p className="text-gray-400">Music making should be accessible to everyone, everywhere.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4 bg-gray-900 rounded-lg p-8 border border-yellow-400">
          <h2 className="text-2xl font-bold text-white">Ready to Collaborate?</h2>
          <p className="text-gray-400">Join thousands of artists already sharing and building music on Barz Base Studio.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/upload"
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition text-center"
            >
              Upload Your First Track
            </Link>
            <Link
              href="/tracks"
              className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg font-medium hover:bg-gray-800 transition text-center"
            >
              Explore Tracks
            </Link>
          </div>
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
