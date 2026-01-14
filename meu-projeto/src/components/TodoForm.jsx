// src/components/TodoForm.jsx
import { memo } from 'react';
import { useTodos } from '../hooks/useTodos';
import useInput from '../hooks/useInput';

function TodoFormBase() {
  const { addTodo } = useTodos();
  const input = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addTodo(text);
    input.reset();
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Adicionar tarefa..."
        value={input.value}
        onChange={input.onChange}
        className="input"
      />
      <button type="submit" className="btn">Adicionar</button>
    </form>
  );
}

const TodoForm = memo(TodoFormBase);
export default TodoForm;
