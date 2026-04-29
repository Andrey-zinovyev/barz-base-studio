import React from 'react';
import { User } from '@/types';

interface ProfileCardProps {
  user: User;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition">
      {/* Avatar */}
      <div className="mb-4">
        <img
          src={user.profilePicture || `https://avatars.dicebear.com/api/avataaars/${user.username}.svg`}
          alt={user.username}
          className="w-16 h-16 rounded-full mx-auto border-2 border-yellow-400"
        />
      </div>

      {/* Username */}
      <h3 className="font-bold text-white text-lg mb-2">{user.username}</h3>

      {/* Bio */}
      {user.bio && <p className="text-sm text-gray-400 mb-4">{user.bio}</p>}

      {/* View Profile Button */}
      <button className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition text-sm">
        View Profile
      </button>
    </div>
  );
};
