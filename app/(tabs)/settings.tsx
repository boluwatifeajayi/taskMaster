import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const name = await AsyncStorage.getItem('@userName');
        if (name) {
          setUserName(name);
        }
      } catch (error) {
        console.error('Error getting user name from AsyncStorage:', error);
      }
    };
    fetchUserName();
  }, []);

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('@userName');
      await AsyncStorage.removeItem('@todos');
      router.push('/');
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  return (
    <View className="flex-1 bg-blue-100 p-4 ">
      <Text className="text-blue-500 pt-10 font-psemibold text-2xl mb-4">Settings</Text>
      <View className="bg-white p-4 rounded-lg shadow-md mb-4">
        <Text className="text-blue-500 font-psemibold text-sm mb-1">Profile</Text>
        <Text className="text-gray-600 font-pbold text-lg">{userName}</Text>
        
      </View>
      <View className="bg-white p-4 rounded-lg shadow-md mb-4">
        <Text className="text-blue-500 font-psemibold text-xl mb-1">About</Text>
        <Text className="text-gray-600 font-pregular">
          This is a simple to-do list app built with React Native, Expo, and Redux.
        </Text>
      </View>
      <TouchableOpacity onPress={clearData} className="bg-red-500 p-4 rounded-lg shadow-md flex-row items-center">
        <Feather name="trash-2" size={24} color="white" />
        <Text className="text-white font-psemibold text-lg ml-2">Clear Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
