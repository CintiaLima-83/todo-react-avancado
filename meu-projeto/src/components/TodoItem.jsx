// src/components/TodoItem.jsx
import { memo } from 'react';
import { useTodos } from '../hooks/useTodos';


function TodoItemBase({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  console.log('[render] TodoItem', todo.id);

  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      </label>
      <button className="btn danger" onClick={() => removeTodo(todo.id)}>
        Remover
      </button>
    </li>
  );
}

// Evita re-render quando props não mudam
const TodoItem = memo(TodoItemBase, (prev, next) => prev.todo === next.todo);
export default TodoItem;
