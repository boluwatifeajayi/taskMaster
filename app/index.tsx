import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

const Welcome = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  useEffect(() => {
    const checkData = async () => {
      try {
        const userName = await AsyncStorage.getItem('@userName');
        const todos = await AsyncStorage.getItem('@todos');
        if (userName || todos) {
          router.push('/home');
        }
      } catch (error) {
        console.error('Error checking data in AsyncStorage:', error);
      }
    };

    checkData();
  }, [router]);

  const handleGetStarted = async () => {
    if (name.trim() !== '') {
      await AsyncStorage.setItem('@userName', name);
      router.push('/home');
    }
  };

  const toggleNameInput = () => {
    setShowNameInput(!showNameInput);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image source={require('../assets/images/img.jpg')} className="w-40 h-40 mb-0" />
          <View className="relative mt-5">
            <Text className="text-2xl text-gray-800 font-pbold text-center">
              Organize and{"\n"}Achieve with{" "}
              <Text className="text-[#0077c0]">TaskMaster</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-600 mt-5 text-center">
            Stay organized and focused with TaskMaster. Create, manage, and complete tasks effortlessly. Your personal productivity powerhouse.
          </Text>

          {showNameInput ? (
            <View className="mt-7 w-full">
              <Text className="text-lg font-pbold mb-2">Whats Your Name ?</Text>
              <Text className="text-gray-600 font-pregular mb-4">
                We'll use this to personalize your experience.
              </Text>
              <View className="flex-row items-center bg-gray-200 rounded-xl px-4 py-3 mb-4">
                <TextInput
                  className="flex-1 text-gray-800 font-pregular"
                  placeholder="Enter your name"
                  value={name}
                  onChangeText={setName}
                />
                <TouchableOpacity className="bg-blue-500 p-3 px-5 rounded-lg" onPress={handleGetStarted}>
                  <Feather name="arrow-right" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity onPress={toggleNameInput} className="mt-7 rounded-xl w-full py-4 text-center bg-[#0077c0]">
              <Text className="text-white text-center font-pbold">Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
