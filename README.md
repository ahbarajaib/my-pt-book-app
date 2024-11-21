# MyPTBookApp

A React Native application built with Expo.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.20.4 specifically)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [iOS Simulator](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd myptbookapp
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies (iOS development only):
```bash
cd ios
pod install
cd ..
```

## Running the App

### Using Expo

```bash
npm start
```

Then press:
- `i` to run on iOS simulator
- `a` to run on Android emulator
- Scan the QR code with your phone's camera to run on your device (requires Expo Go app)

### Running on iOS

```bash
npm run ios
```

### Running on Android

```bash
npm run android
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run reset-project` - Reset the project using custom script
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web browser
- `npm test` - Run tests in watch mode
- `npm run lint` - Run linting

## Tech Stack

- React Native 0.76.2
- Expo SDK 52
- React Navigation 7
- TypeScript
- Jest for testing
- Expo Router for navigation
- React Native Reanimated for animations
- Various Expo modules including:
  - expo-blur
  - expo-haptics
  - expo-linking
  - expo-router
  - expo-splash-screen
  - expo-status-bar
  - expo-symbols

## Development Notes

- This project uses TypeScript for type safety
- Navigation is handled by Expo Router
- Supports iOS, Android, and Web platforms
- Uses React Native's new architecture

## Troubleshooting

If you encounter any issues:

1. Verify Node.js version:
```bash
node -v  # Should be v18.20.4
```

2. Clear watchman watches:
```bash
watchman watch-del-all
```

3. Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

4. Reset Metro bundler cache:
```bash
npm start -- --reset-cache
```

5. For iOS, clean and reinstall pods:
```bash
cd ios
pod deintegrate
pod install
cd ..
```

## Project Structure

```
myptbookapp/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   ├── explore.tsx
│   │   └── _layout.tsx
│   └── _layout.tsx
├── components/
│   ├── ui/
│   │   ├── TabBarBackground.tsx
│   │   ├── IconSymbol.tsx
│   │   └── ...
│   ├── HelloWave.tsx
│   ├── ParallaxScrollView.tsx
│   ├── ThemedText.tsx
│   ├── ThemedView.tsx
│   └── HapticTab.tsx
├── hooks/
│   └── useThemeColor.ts
└── scripts/
    └── reset-project.js
```

## Testing

The project uses Jest for testing. Run tests with:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[Your chosen license]

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/myptbookapp](https://github.com/yourusername/myptbookapp)
