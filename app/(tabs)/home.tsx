import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, loadTodosFromStorage, updateTodo } from '@/store/TodoSlice';
import TodoItem from '@/components/TodoItem';
import NewTodoModal from '@/components/NewTodoModal';
import { RootState } from '@/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { SwipeListView } from 'react-native-swipe-list-view';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [userName, setUserName] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const name = await AsyncStorage.getItem('@userName');
        if (name) {
          setUserName(name);
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Error getting user name from AsyncStorage:', error);
      }
    };

    dispatch(loadTodosFromStorage());
    fetchUserName();
  }, [dispatch, router]);

  const handleAddTodo = (todo: any) => {
    dispatch(addTodo(todo));
    setModalVisible(false);
  };

  const handleUpdateTodo = (todo: any) => {
    dispatch(updateTodo(todo));
    setUpdateModalVisible(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(loadTodosFromStorage());
    setRefreshing(false);
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return `Good morning`;
    } else if (currentHour < 18) {
      return `Good afternoon`;
    } else {
      return `Good evening`;
    }
  };

  const sortedTodos = [...todos].sort((a:any, b:any) => a.completed - b.completed);

  return (
    <View className="flex-1 py-20 bg-blue-100 p-4">
      <Text className="text-blue-500 pt-10 font-psemibold text-2xl">{getGreeting()}, {userName}</Text>
      <Text className="pt-0 font-psemibold text-gray-600 text-md mb-4">What are we getting done today ?</Text>
      <SwipeListView
        data={sortedTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }:any) => (
          <TouchableOpacity onPress={() => { setSelectedTodo(item); setUpdateModalVisible(true); }}>
            <TodoItem todo={item} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListEmptyComponent={<Text className="text-gray-600 font-pregular text-center mt-20">No todos yet</Text>}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="absolute bottom-4 right-4 bg-blue-500 p-4 px-6 rounded-full"
      >
        <Text className="text-white font-psemibold text-lg">New Todo +</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <NewTodoModal onAddTodo={handleAddTodo} onClose={() => setModalVisible(false)} />
      </Modal>
      <Modal visible={updateModalVisible} animationType="slide" onRequestClose={() => setUpdateModalVisible(false)}>
        <NewTodoModal onAddTodo={handleUpdateTodo} onClose={() => setUpdateModalVisible(false)} todo={selectedTodo} />
      </Modal>
      <StatusBar style="dark" />
    </View>
  );
};

export default HomeScreen;
