// src/components/TodoList.jsx
import { memo } from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoItem from './TodoItem';

function TodoListBase() {
  const { filteredTodos } = useTodos();

  console.log('[render] TodoList');

  if (filteredTodos.length === 0) {
    return <p className="empty">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
}

const TodoList = memo(TodoListBase);
export default TodoList;
