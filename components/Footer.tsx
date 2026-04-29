'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  return (
    <>
      {/* Cookie Notice */}
      {!acceptedCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 px-4 py-4 z-40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              We use cookies to improve your experience on Barz Base Studio.
            </p>
            <button
              onClick={() => setAcceptedCookies(true)}
              className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition whitespace-nowrap"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`bg-black border-t border-gray-800 ${!acceptedCookies ? 'mb-20' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-white mb-4">About Barz</h3>
              <p className="text-sm text-gray-400">
                The collaborative music platform where artists share their demos and others can build on their sound.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-gray-400 hover:text-yellow-400 transition">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-yellow-400 transition">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-yellow-400 transition">
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex items-center justify-between">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.svg"
                alt="Barz Studio Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-500">© 2026 Barz Base Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
