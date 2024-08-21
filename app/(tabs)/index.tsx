import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/store/TodoSlice';
import TodoItem from '@/components/TodoItem';
import NewTodoModal from '@/components/NewTodoModal';
import { RootState } from '@/store';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTodo = (todo:any) => {
    dispatch(addTodo(todo));
    setModalVisible(false);
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <View className="flex-1 bg-blue-100 p-4">
      <Text className="text-blue-500 font-pbold text-2xl mb-4">{getGreeting()}</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="absolute bottom-4 right-4 bg-blue-500 p-4 rounded-full"
      >
        <Text className="text-white font-pbold text-lg">+</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <NewTodoModal onAddTodo={handleAddTodo} onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default HomeScreen;