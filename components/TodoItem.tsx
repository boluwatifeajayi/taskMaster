import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '@/store/TodoSlice';

interface TodoItemProps {
  todo: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <View className="flex-row justify-between items-center bg-white p-4 rounded-lg mb-4 shadow-md">
      <View className="flex-1">
        <Text className={`text-blue-500 font-pbold text-lg ${todo.completed ? 'line-through' : ''}`}>
          {todo.title}
        </Text>
        <Text className={`text-gray-600 font-pregular ${todo.completed ? 'line-through' : ''}`}>
          {todo.description}
        </Text>
      </View>
      <TouchableOpacity onPress={handleToggle}>
        <View className={`h-6 w-6 rounded-full ${todo.completed ? 'bg-green-500' : 'bg-gray-400'}`} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Text className="text-red-500 font-pbold text-lg">X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;