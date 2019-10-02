import { useState, useRef } from 'react';

type FormState = {
  name: string;
  description: string;
}

type FormState2 = FormState & {
  isLike: boolean;
}

type FormProps = {
  onSubmit: (form: { name: string, description: string }) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormState>({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setForm({
      ...form,
      [name]: value
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(form);

    setForm({
      name: '',
      description: ''
    });

    window && window.console.log(inputRef);

    inputRef.current && inputRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} ref={inputRef} />
      <input type="text" name="description" value={description} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;