export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    isDone: boolean;
  }
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={`todo-item ${todo.isDone ? 'done' : ''}`}>
      <style jsx>{`
        cousor: pointer;

        li.done > span.text {
          color: #999;
          text-decoration: line-through;
        }

        span.remove {
          color:#ff0000;
          margin:0 0 0 4px;
        }
      `}</style>

      <span className="text">{todo.text}</span>
      <span className="remove">[X]</span>
    </li>
  )
}

export default TodoItem;