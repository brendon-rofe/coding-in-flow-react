import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem ({todo}: TodoItemProps) {
  return (
    <div>
      <p>{todo.title}</p>
    </div>
  )
}