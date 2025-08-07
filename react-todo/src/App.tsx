import { todos } from "./data/todos";

function App() {

  return (
    <main className="py-10 h-screen bg-gray-800">
      <h1 className="font-bold text-3xl text-center text-gray-400">Your Todos</h1>
      <div>{todos.map(todo => (
        <p>{todo.title}</p>
      ))}</div>
    </main>
  );
}

export default App
