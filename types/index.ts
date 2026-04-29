export interface Track {
  id: string;
  title: string;
  artist: string;
  producer?: string;
  audioUrl: string;
  downloadUrl: string;
  uploadedAt: string;
  duration: number;
  genre?: string;
  lyrics?: string;
  hasLyrics: boolean;
  projectFile?: string;
  language: string;
  userId: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  createdAt: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
}
