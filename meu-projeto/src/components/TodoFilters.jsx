// src/components/TodoFilters.jsx
import { memo } from 'react';
import { useTodos } from '../hooks/useTodos';


function TodoFiltersBase() {
  const { filter, setFilter, clearCompleted } = useTodos();

  return (
    <div className="filters">
      <button
        className={filter === 'all' ? 'btn active' : 'btn'}
        onClick={() => setFilter('all')}
      >
        Todas
      </button>
      <button
        className={filter === 'completed' ? 'btn active' : 'btn'}
        onClick={() => setFilter('completed')}
      >
        Concluídas
      </button>
      <button
        className={filter === 'pending' ? 'btn active' : 'btn'}
        onClick={() => setFilter('pending')}
      >
        Pendentes
      </button>
      <button className="btn danger" onClick={clearCompleted}>
        Limpar concluídas
      </button>
    </div>
  );
}

const TodoFilters = memo(TodoFiltersBase);
export default TodoFilters;
