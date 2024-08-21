# Welcome to TaskMaster 📋

TaskMaster is an Expo project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). It is a simple to-do list app built with React Native, Expo, and Redux. This app helps you stay organized and focused by allowing you to create, manage, and complete tasks effortlessly.

## Get Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the App**

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [Development Build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).



## Features

- **User Personalization**: Users can enter their name for a personalized experience.
- **Task Management**: Create, update, and delete tasks.
- **Task Completion**: Mark tasks as completed, which automatically moves them to the bottom of the list.
- **Persistent Storage**: Tasks and user data are stored locally using AsyncStorage.
- **Pull to Refresh**: Pull down to refresh the task list.
- **Welcome Screen**: Only shown if the user is using the app for the first time or if data has been cleared.

## Project Structure

- **app**: Contains the main application files.
  - **components**: Reusable components like `TodoItem` and `NewTodoModal`.
  - **screens**: Main screens like `HomeScreen`, `SettingsScreen`, and `Welcome`.
  - **store**: Redux store configuration and slices.
- **assets**: Contains images and other static assets.

## Key Components

### TodoItem

The `TodoItem` component displays individual tasks. It includes:

- **Title and Description**: Displayed with a strike-through if the task is completed.
- **Created At**: Shows the date and time the task was created.
- **Checkbox**: To mark the task as completed.
- **Delete Button**: Revealed when the task is swiped left.

### NewTodoModal

The `NewTodoModal` component is used to add new tasks or update existing ones. It includes:

- **Title Input**: For the task name.
- **Description Input**: For the task description.
- **Add/Update Button**: To add a new task or update an existing one.
- **Cancel Button**: To close the modal without saving changes.

### HomeScreen

The `HomeScreen` component displays the list of tasks. It includes:

- **FlatList**: To display the tasks.
- **Pull to Refresh**: To refresh the task list.
- **Floating Action Button**: To add a new task.
- **Modals**: For adding new tasks or updating existing ones.

### SettingsScreen

The `SettingsScreen` component allows users to clear their data and view profile information. It includes:

- **Profile Section**: Displays the user's name and email.
- **About Section**: Provides information about the app.
- **Clear Data Button**: Clears the user's name and tasks from local storage.

### Welcome

The `Welcome` component is the initial screen shown to new users. It includes:

- **Get Started Button**: To proceed to the name input screen.
- **Name Input Screen**: To enter the user's name.

## Get a Fresh Project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn More

To learn more about developing your project with Expo, look at the following resources:

- [Expo Documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the Community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord Community](https://chat.expo.dev): Chat with Expo users and ask questions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides a comprehensive overview of the TaskMaster app, including its features, how to get started, the project structure, key components, and additional resources for learning and contributing.