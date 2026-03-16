# Scribe: Your Digital Companion for Spiritual Growth ✝️

Scribe is an intuitive and comprehensive mobile application designed to enrich your spiritual journey. It offers a seamless experience for capturing insights from sermons and Bible studies, engaging with daily scriptures, and testing your knowledge of the Bible through interactive quizzes. Built with modern mobile development practices, Scribe is your personal companion for deeper reflection and study.

## Features

- **Personalized Note-Taking**: Effortlessly capture sermon notes, personal reflections, and prayer requests. Organize your thoughts with customizable tags and pin important notes for quick access.
- **Integrated Scripture Picker**: Easily insert relevant Bible verses directly into your notes using a smart search and browse feature, making your study notes more contextual and complete.
- **Daily Spiritual Nourishment**: Receive a curated daily Bible verse, a psalm, a morning prayer, and an evening verse to inspire and guide your daily walk.
- **Interactive Bible Quiz**: Test and expand your knowledge of the Old Testament, New Testament, and books of the Bible with an engaging, turn-based quiz featuring various categories.
- **Offline-First Design**: Access your notes and all static Bible content anytime, anywhere, without requiring an internet connection.
- **Intuitive User Interface**: Enjoy a clean, minimalist design with support for both light and dark themes to enhance readability and user comfort.
- **Robust Local Data Storage**: All your notes and app preferences are securely stored on your device using `AsyncStorage`.

## Getting Started

Follow these steps to set up and run Scribe on your local machine.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/tejHacks/scribe-mobile-app.git
   cd scribe-mobile-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or if you prefer yarn
   # yarn install
   ```

3. **Start the Expo Development Server**:

   ```bash
   npx expo start
   ```

   This will open a new tab in your web browser with the Expo DevTools.

4. **Run on Your Device or Emulator**:
   - **For iOS/Android Physical Device**: Scan the QR code displayed in the terminal or Expo DevTools using the Expo Go app.
   - **For iOS Simulator**: Press `i` in the terminal to open the app in an iOS simulator (requires Xcode).
   - **For Android Emulator**: Press `a` in the terminal to open the app in an Android emulator (requires Android Studio).
   - **For Web**: Press `w` in the terminal to open the app in your web browser.

### Environment Variables

Scribe currently does not require any specific environment variables beyond the standard Expo setup. All data is stored locally on the device.

## Usage

Scribe provides a seamless experience across three main tabs: Notes, Verse, and Quiz.

### Notes Tab

This is your central hub for capturing and organizing your spiritual insights.

- **Creating a New Note**:
  - Tap the `+` icon in the top right corner of the Notes screen.
  - Enter a `Note title...` and `Write your thoughts...` in the respective fields.
  - Select relevant `Tags` from the list (e.g., Prayer, Sermon, Devotion) to categorize your note.
  - **Inserting Scripture**: Tap the `Scripture` button to open a modal. You can `Search` for verses by keyword, book, or reference (e.g., "John 3", "love") or `Browse` through books of the Bible. Tap on a verse to insert it into your note body.
  - Tap `Save` to store your note.
- **Editing a Note**:
  - From the Notes list, tap on any existing note to open it for editing.
  - Make your desired changes to the title, body, or tags, then tap `Save`.
- **Pinning Notes**:
  - On the Notes list, tap the bookmark icon next to a note to pin/unpin it. Pinned notes appear at the top of your list.
- **Searching Notes**:
  - Use the `Search notes...` bar to filter your notes by keywords in their title or body.
- **Filtering by Tags**:
  - Tap on any tag chip above the notes list to filter notes by that specific tag. Select "All" to view all notes.
- **Deleting a Note**:
  - While editing a note, tap the trash can icon in the top right. Confirm your action in the alert dialog.

### Verse Tab

This tab provides your daily dose of inspiration.

- Upon opening, you will see the `Verse of the Day`, `Psalm of the Day`, `Prayer of the Day`, and an `Evening Verse`, automatically updated for the current date.
- The content is static from the app's internal scripture database, ensuring availability offline.

### Quiz Tab

Challenge your Bible knowledge with an interactive quiz.

- **Starting a Quiz**:
  - On the Quiz screen, tap the `Start Quiz` button.
  - You will be presented with {TOTAL} multiple-choice questions from different categories (Old Testament, New Testament, Books).
- **Answering Questions**:
  - Read the question and select one of the provided options.
  - The app will immediately indicate if your answer is correct or incorrect.
  - The quiz automatically progresses to the next question after a short delay.
- **Viewing Results**:
  - After completing all questions, you will see a `Results` screen displaying your score, percentage, and a message based on your performance.
  - You can `Review` all questions and their correct/incorrect status.
  - Tap `Try Again` to restart the quiz with a new set of shuffled questions.

## Technologies Used

| Technology                                                                  | Description                                                                                                                                 |
| :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [React Native](https://reactnative.dev/)                                    | Cross-platform framework for building native mobile apps using JavaScript/TypeScript.                                                       |
| [Expo](https://expo.dev/)                                                   | A framework and platform for universal React applications, simplifying development and deployment.                                          |
| [TypeScript](https://www.typescriptlang.org/)                               | A strongly typed superset of JavaScript that enhances code quality and developer productivity.                                              |
| [Expo Router](https://expo.github.io/router/)                               | File-system-based router for universal React Native applications, providing intuitive navigation.                                           |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | Asynchronous, unencrypted, persistent key-value storage system for React Native.                                                            |
| [@expo/vector-icons](https://icons.expo.fyi/)                               | A comprehensive set of customizable vector icons for React Native, powered by `Ionicons`.                                                   |
| [Zustand](https://zustand-bear.github.io/docs/guides/react-native)          | A small, fast, and scalable bearbones state-management solution (listed as a dependency, though direct note persistence uses AsyncStorage). |
| [@expo-google-fonts](https://github.com/expo/google-fonts)                  | Integrates Google Fonts seamlessly into Expo applications.                                                                                  |

## Contributing

We welcome contributions to Scribe! Here's how you can help:

- 💡 **Suggest new features or improvements**: Open an issue to share your ideas.
- 🐞 **Report bugs**: If you find any issues, please open an issue with detailed steps to reproduce.
- 👨‍💻 **Submit pull requests**:
  1. Fork the repository.
  2. Create a new branch for your feature or bug fix.
  3. Make your changes and ensure your code adheres to the project's coding standards.
  4. Write clear, concise commit messages.
  5. Submit a pull request for review.

## Author Info

- **TejHacks**: [TejHacks](https://github.com/tejHacks)
- **LinkedIn**: [Olateju Olamide](https://www.linkedin.com/in/olateju-olamide-22314a292/)
- **Medium**: [Medium Profile](https://medium.com/@olateju202)
- **X (formerly Twitter)**: [@tejthedev](https://x.com/tejthedev)

---

[![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Async Storage](https://img.shields.io/badge/Async_Storage-F58212?style=for-the-badge&logo=react&logoColor=white)](https://react-native-async-storage.github.io/async-storage/)
[![Project Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)](package.json)
[![Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
