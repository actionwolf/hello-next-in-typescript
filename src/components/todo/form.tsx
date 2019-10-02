import React, { useState } from 'react';
import { useTodosDispatch } from '~contexts/todo';

const TodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useTodosDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: 'CREATE', text: value });

    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={'what do you want?'}
        value={value}
        onChange={onChange} />

      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm;