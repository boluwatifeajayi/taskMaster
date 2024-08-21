import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

interface NewTodoModalProps {
  onAddTodo: (todo: any) => void;
  onClose: () => void;
  todo?: any;
}

const NewTodoModal: React.FC<NewTodoModalProps> = ({ onAddTodo, onClose, todo }) => {
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [description, setDescription] = useState(todo ? todo.description : '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleAddTodo = () => {
    if (title.trim() === '') {
      setError('task name is required');
    } else {
      onAddTodo({
        id: todo ? todo.id : Date.now(),
        title,
        description,
        completed: todo ? todo.completed : false,
        createdAt: todo ? todo.createdAt : new Date().toLocaleString(),
      });
      setTitle('');
      setDescription('');
      setError('');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 bg-blue-100 px-6 justify-center items-center">
      <View className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <Text className="text-blue-500 font-pbold text-2xl mb-4">{todo ? 'Update Todo' : 'Add New Todo'}</Text>
        <TextInput
          className="bg-gray-200 p-3 rounded-lg mb-4 font-pregular"
          placeholder="Task Name"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          className="bg-gray-200 p-3 rounded-lg mb-4 font-pregular"
          placeholder="Task Description"
          value={description}
          onChangeText={setDescription}
        />
        {error ? <Text className="text-red-500 mb-4">{error}</Text> : null}
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={handleAddTodo} className="bg-[#0077c0] p-3 rounded-lg flex-1 mr-2">
            <Text className="text-white font-psemibold text-center text-lg">{todo ? 'Update' : 'Add Todo'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} className="bg-gray-400 p-3 rounded-lg flex-1 ml-2">
            <Text className="text-white font-psemibold text-center text-lg">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewTodoModal;
