import { TodosContextProvider } from '~contexts/todo';
import TodoForm from '~components/todo/form';
import TodoList from '~components/todo/list';


const Page = () => {
  return (
    <TodosContextProvider>
      <h1>TODO-LIST</h1>
      <TodoForm />
      <TodoList />
    </TodosContextProvider>
  )
}

export default Page;