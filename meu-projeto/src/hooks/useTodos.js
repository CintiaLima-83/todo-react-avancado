// src/hooks/useTodos.js
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export function useTodos() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('useTodos deve ser usado dentro de <TodoProvider>');
  return ctx;
}
