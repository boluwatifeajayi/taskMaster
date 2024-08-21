import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  return (
    <View className="flex-1 bg-blue-100 p-4">
      <View className="bg-white p-4 rounded-lg shadow-md mb-4">
        <Text className="text-blue-500 font-pbold text-2xl mb-2">Profile</Text>
        <Text className="text-gray-600 font-pregular">John Doe</Text>
        <Text className="text-gray-600 font-pregular">johndoe@example.com</Text>
      </View>
      <View className="bg-white p-4 rounded-lg shadow-md mb-4">
        <Text className="text-blue-500 font-pbold text-2xl mb-2">About</Text>
        <Text className="text-gray-600 font-pregular">
          This is a simple to-do list app built with React Native, Expo, and Redux.
        </Text>
      </View>
      <TouchableOpacity className="bg-red-500 p-4 rounded-lg shadow-md">
        <Text className="text-white font-pbold text-lg">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;