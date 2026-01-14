/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useEffect, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [storedTodos, setStoredTodos] = useLocalStorage('todos', []);
  const [todos, setTodos] = useState(storedTodos);
  const [filter, setFilter] = useState('all'); // 'all' | 'completed' | 'pending'

  useEffect(() => {
    setStoredTodos(todos);
  }, [todos, setStoredTodos]);

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false, createdAt: Date.now() },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filteredTodos = useMemo(() => {
    console.log('[useMemo] recalculando filteredTodos');
    switch (filter) {
      case 'completed':
        return todos.filter((t) => t.completed);
      case 'pending':
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const value = {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
    filteredTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
