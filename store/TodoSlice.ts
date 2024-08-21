import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index] = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;