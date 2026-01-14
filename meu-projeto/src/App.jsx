// src/App.jsx
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';
import './index.css';

export default function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo React Avançado</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
