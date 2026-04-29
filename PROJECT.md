# 🎤 Barz Base Studio

**The ultimate collaborative music platform** where artists upload demo tracks ("bars") and others can download, remix, and build on their sound.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

---

## ✨ Features

### 🎨 Design System
- **Dark Theme**: Black background (#0a0a0a) with yellow accents (#fbbf24)
- **Minimal & Modern**: SoundCloud/BandLab-inspired UI
- **Fully Responsive**: Mobile-first design with Tailwind breakpoints
- **Smooth Interactions**: Transitions and hover effects throughout

### 🔐 Authentication (Mock)
- Email/password login and registration
- Social login UI (Google, Facebook, Apple, Phone)
- Persistent auth state across pages
- Protected routes (Upload, Profile require login)
- Mock user database with sample credentials

### 📱 Pages

#### **Home** (`/`)
- Hero section: "Let others finish your demo"
- Trending tracks section with 3 featured tracks
- Popular creators section with 4 featured artists
- Call-to-action section
- Stats display (tracks, artists, collabs, countries)

#### **Tracks** (`/tracks`)
- Grid layout of 9 mock tracks
- Each track displays:
  - Title, artist, producer, genre
  - HTML5 audio player
  - Duration and language
  - Download button
  - Upload date
- "Load More" button
- Quick link to upload

#### **Upload** (`/upload`) - *Protected*
- **Required Fields**:
  - Track title
  - Artist name
  - Audio file (mp3, wav, ogg, flac)
  - Lyrics (or check "No lyrics" option)
- **Optional Fields**:
  - Producer name
  - Language (dropdown)
  - Project file (FL Studio, Ableton, etc.)
- Form validation
- Success feedback with profile redirect

#### **About** (`/about`)
- Platform mission and values
- How it works (4-step process)
- Values section (Creativity, Collaboration, Fairness, Accessibility)
- Call-to-action buttons

#### **Login** (`/login`) - *Public*
- Login form (email/password)
- Registration toggle with extended form
- Social login buttons (UI only)
- Error handling
- Test credentials: `demo@example.com` / `password`

#### **Profile** (`/profile`) - *Protected*
- User profile header with avatar, username, bio
- Edit & Share Profile buttons
- "My Tracks" section (user uploads)
- "Saved Tracks" section (favorites)
- Upload new track button
- Redirects to login if not authenticated

### 🧩 Components

#### **Navbar** (`components/Navbar.tsx`)
- Sticky header with logo
- Navigation links: About, Upload, My Profile
- Conditional login/logout buttons
- Responsive mobile menu
- Yellow accent styling

#### **Footer** (`components/Footer.tsx`)
- Company info and description
- Legal links (Terms, Privacy, Cookie Policy)
- Social links (Twitter, Instagram, Discord)
- Cookie notice banner with accept button
- Dismissible on small devices

#### **TrackCard** (`components/TrackCard.tsx`)
- Track title, artist, producer (optional)
- Genre badge
- Integrated HTML5 audio player
- Duration, language, upload date
- Lyrics indicator
- Download button with link

#### **ProfileCard** (`components/ProfileCard.tsx`)
- User avatar with border
- Username and bio
- View Profile button

#### **Button** (`components/Button.tsx`)
- Reusable primary/secondary variants
- Supports links and click handlers
- Yellow accent theme
- Disabled state support

### 🔑 Authentication System (`lib/auth.tsx`)
- React Context-based auth
- Mock user database
- Login/Register functions
- Logout functionality
- Loading states
- Error handling

### 📦 Data Types (`types/index.ts`)
```typescript
interface Track {
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

interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  createdAt: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
}
```

---

## 🏗️ Project Structure

```
barz-base-studio/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── globals.css             # Dark theme + Tailwind setup
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── upload/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   └── tracks/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── TrackCard.tsx
│   ├── ProfileCard.tsx
│   └── Button.tsx
├── lib/
│   └── auth.tsx                # Auth context & hook
├── types/
│   └── index.ts                # TypeScript interfaces
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build
npm run start
```

---

## 🔐 Test Credentials

**Email:** `demo@example.com`  
**Password:** `password`

Or create a new account on the registration form.

---

## 📊 Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Background | Nearly Black | #0a0a0a |
| Secondary | Dark Gray | #1a1a1a |
| Tertiary | Lighter Gray | #2a2a2a |
| Accent | Yellow | #fbbf24 |
| Accent Hover | Darker Yellow | #f59e0b |
| Border | Gray | #333333 |
| Text | Light | #f5f5f5 |

---

## 🔄 User Flow

### Anonymous User
```
Home → About ✅
     → Tracks ✅
     → Login (required)
```

### Logged-In User
```
Home → All pages ✅
     → Upload ✅
     → Profile ✅
     → Download/Share ✅
```

---

## 🛠️ Configuration

### Environment Variables
None required for mock implementation.

### TypeScript
- Strict mode enabled
- Path alias: `@/*` → root

### Tailwind CSS
- Dark mode enabled by default
- PostCSS 4
- Custom color variables

### ESLint
- ESLint 9
- Next.js config

---

## 📈 Future Enhancements

### Phase 1: Backend Integration
- [ ] Supabase authentication (real)
- [ ] Database schema (tracks, users, favorites)
- [ ] S3/Supabase Storage for audio files
- [ ] Real file upload handling

### Phase 2: Features
- [ ] User profiles (edit bio, profile picture)
- [ ] Search & filters (by genre, artist, date)
- [ ] Favorites/bookmarking system
- [ ] Comments and ratings
- [ ] Follow system and notifications

### Phase 3: Advanced
- [ ] Remix/version history
- [ ] Collaboration invites
- [ ] Licensing and credits
- [ ] Payment/monetization
- [ ] Analytics dashboard

---

## 🤝 Development Notes

### Code Style
- Functional components with TypeScript
- React hooks for state management
- Tailwind CSS for styling
- Next.js App Router conventions

### Form Handling
- Client-side validation
- Error state management
- Success feedback

### Authentication
- Mock-only for now (no real backend)
- Use `useAuth()` hook to access auth state
- Protected routes check `authState.isLoggedIn`

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Flex/grid layouts for flexibility

---

## 📄 Metadata

- **Version**: 1.0.0
- **Next.js**: 16.2.4
- **React**: 19.2.4
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **Node**: 18+

---

## 📝 License

Private project for Barz Base Studio

---

**Built with ❤️ for musicians and collaborators worldwide.**

