import { createContext, Dispatch, useReducer, useContext } from 'react';

export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

// function todoReducer(state: TodosState, action: Action): TodosState {
function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;

      return state.concat({
        id: nextId,
        text: action.text,
        isDone: false
      });

    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );

    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);

    default:
      throw new Error('unhandle');
  }
}

// export function TodosContextProvider({ children }: { children: React.ReactNode }) {
export const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, [
    {
      id: 100,
      text: 'TEXT - 100',
      isDone: false
    },
    {
      id: 101,
      text: 'TEXT - 101',
      isDone: true
    },
    {
      id: 102,
      text: 'TEXT - 102',
      isDone: false
    }
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  )
}

export const useTodosState = () => {
  const state = useContext(TodosStateContext);

  if (!state) {
    throw new Error('TodosProvider not found');
  } else {
    return state;
  }
}

export const useTodosDispatch = () => {
  const dispatch = useContext(TodosDispatchContext);

  if (!dispatch) {
    throw new Error('TodosProvider not found')
  } else {
    return dispatch;
  }
}