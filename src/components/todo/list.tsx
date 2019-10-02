import { Todo, useTodosState } from '~contexts/todo';
import TodoItem from '~components/todo/item';

const TodoList = () => {
  /** Conext API 적용 이전 */
  // const todos = [
  //   {
  //     id: 1,
  //     text: 'TEXT 1',
  //     isDone: true
  //   },
  //   {
  //     id: 2,
  //     text: 'TEXT 2',
  //     isDone: true
  //   },
  //   {
  //     id: 3,
  //     text: 'TEXT 3',
  //     isDone: false
  //   }
  // ];

  const todos: Todo[] = useTodosState();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList;