import { Todo, useTodosDispatch } from '~contexts/todo';


export type TodoItemProps = {
  todo: Todo;

  /** Conext API 적용 이전 */
  // todo: {
  //   id: number;
  //   text: string;
  //   isDone: boolean;
  // }
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();

  const onToggle = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    dispatch({ type: 'TOGGLE', id: todo.id });
  }

  const onRemove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    dispatch({ type: 'REMOVE', id: todo.id });
  }

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

      <span
        className="text"
        onClick={onToggle}>
        {todo.id} : {todo.text}
      </span>

      <span
        className="remove"
        onClick={onRemove}>
        [X]
        </span>
    </li>
  )
}

export default TodoItem;