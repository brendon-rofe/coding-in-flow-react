import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItem ({todo, onCompletedChange}: TodoItemProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 hover:bg-slate-50">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)} 
          className="sr-only peer" 
        />
        <span
          className="w-5 h-5 rounded-md border-2 border-gray-400 peer-checked:bg-gray-500 peer-checked:border-black-500 transition-colors duration-200"
        ></span>
        <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.title}</span>
      </label>
    </div>
  )
}