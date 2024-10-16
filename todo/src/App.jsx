import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{

  },[])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: todo.length + 1, ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.ma);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id == id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { completed: !todo.completed, ...todo } : todo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
