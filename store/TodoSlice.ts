import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string; // Add the createdAt field
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const loadTodosFromStorage = createAsyncThunk(
  'todo/loadTodosFromStorage',
  async () => {
    try {
      const todosString = await AsyncStorage.getItem('@todos');
      return todosString ? JSON.parse(todosString) : [];
    } catch (e) {
      console.error('Error loading todos from AsyncStorage:', e);
      return [];
    }
  }
);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'createdAt'>>) => {
      const newTodo = {
        ...action.payload,
        createdAt: new Date().toLocaleString(), // Automatically add the current date and time
      };
      state.todos.push(newTodo);
      saveTodosToStorage(state.todos);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index] = action.payload;
      saveTodosToStorage(state.todos);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToStorage(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
      saveTodosToStorage(state.todos);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodosFromStorage.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

const saveTodosToStorage = async (todos: Todo[]) => {
  try {
    await AsyncStorage.setItem('@todos', JSON.stringify(todos));
  } catch (e) {
    console.error('Error saving todos to AsyncStorage:', e);
  }
};

export const { addTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
