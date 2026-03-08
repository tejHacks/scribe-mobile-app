# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Christian Notes App

- Notes
- Daily Verse
- Dark Mode
- Quiz Side or Slide
- Export Notes [Sync and Sahre via]

📝 Notes

Create, edit, delete, and pin notes
Tags: Prayer, Sermon, Devotion, Study, Gratitude, and more
Search and filter by tag from the sidebar
Copy individual notes to clipboard

📖 Daily Verse

A different Bible verse every day (auto-rotates by date)
AI "Inspire Me" button — fetches a fresh, personalized verse with a 2-sentence reflection via Claude
One-click to save an AI verse directly as a new note

🌙 Dark Mode

Toggle between a warm parchment light theme and a deep dark theme

🧠 Bible Quiz

Slides in from the right — 8 random questions per session
Instant feedback on right/wrong, progress bar, and final score with encouraging message

📤 Export

## Workflow

npx expo install zustand @react-native-async-storage/async-storage
npx expo install expo-sharing expo-file-system # for Export feature
npx expo install @expo-google-fonts/playfair-display @expo-google-fonts/lora

## Installed the above Libraries

npx expo install zustand @react-native-async-storage/async-storage
npx expo install expo-sharing expo-file-system
npx expo install @expo-google-fonts/playfair-display @expo-google-fonts/lora

## Folder structre

app/
├── index.tsx # Redirects to (tabs)/notes
├── \_layout.tsx # Root layout (fonts, theme)
│
├── (tabs)/
│ ├── \_layout.tsx # Tab bar (Notes, Verse, Quiz)
│ ├── notes.tsx # Notes list screen
│ ├── verse.tsx # Daily Verse screen
│ └── quiz.tsx # Bible Quiz screen
│
└── note/
└── [id].tsx # Create / Edit note screen

components/
├── notes/
│ ├── NoteCard.tsx
│ ├── NoteEditor.tsx
│ └── TagChip.tsx
│
├── verse/
│ └── VerseCard.tsx
│
├── quiz/
│ ├── QuizQuestion.tsx
│ ├── QuizOption.tsx
│ └── QuizResult.tsx
│
└── ui/
├── SearchBar.tsx
├── IconButton.tsx
└── EmptyState.tsx

hooks/
├── useNotes.ts # CRUD + AsyncStorage
├── useDailyVerse.ts # Pick verse by day index
├── useQuiz.ts # Quiz state
└── useTheme.ts # Dark/light toggle

constants/
├── verses.ts # ← All scriptures, static TS file
├── quiz.ts # ← All quiz questions, static TS file
└── tags.ts # Tag list

store/
└── notesStore.ts # Zustand + AsyncStorage persistence

services/
└── storage.ts # AsyncStorage read/write helpers

types/
└── index.ts # Note, Verse, QuizQuestion interfaces

assets/
├── fonts/
└── images/
