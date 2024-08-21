import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

interface NewTodoModalProps {
  onAddTodo: (todo:any) => void;
  onClose: () => void;
}

const NewTodoModal: React.FC<NewTodoModalProps> = ({ onAddTodo, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (title.trim() !== '') {
      onAddTodo({
        id: Date.now(),
        title,
        description,
        completed: false,
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 bg-blue-100 justify-center items-center">
      <View className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <Text className="text-blue-500 font-pbold text-2xl mb-4">Add New Todo</Text>
        <TextInput
          className="bg-gray-200 p-3 rounded-lg mb-4 font-pregular"
          placeholder="Todo Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          className="bg-gray-200 p-3 rounded-lg mb-4 font-pregular"
          placeholder="Todo Description"
          value={description}
          onChangeText={setDescription}
        />
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={handleAddTodo} className="bg-blue-500 p-3 rounded-lg flex-1 mr-2">
            <Text className="text-white font-pbold text-lg">Add Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} className="bg-gray-400 p-3 rounded-lg flex-1 ml-2">
            <Text className="text-white font-pbold text-lg">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewTodoModal;