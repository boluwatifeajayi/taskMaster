import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '@/store/TodoSlice';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

interface TodoItemProps {
  todo: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => dispatch(deleteTodo(todo.id)),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <View className="flex-row justify-between items-center bg-white p-4 rounded-lg mb-4 shadow-md">
      <View className="flex-1">
        <Text className={`text-gray-800 font-psemibold ${todo.completed ? 'line-through' : ''}`}>
          {todo.title}
        </Text>
        <Text className={`text-gray-600 font-pregular text-sm ${todo.completed ? 'line-through' : ''}`}>
          {todo.description}
        </Text>
        <Text className="text-gray-500 font-pregular text-xs">
          {todo.createdAt}
        </Text>
      </View>
      <TouchableOpacity onPress={handleToggle}>
        <MaterialCommunityIcons
          name={todo.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={24}
          color={todo.completed ? 'dodgerblue' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity className='ml-2' onPress={handleDelete}>
        <Feather name="trash-2" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
