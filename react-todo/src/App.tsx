import TodoItem from "./components/TodoItem";
import { todos } from "./data/todos";

function App() {

  return (
    <main className="py-10 h-screen bg-gray-800">
      <h1 className="font-bold text-3xl text-center text-gray-400">Your Todos</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App
