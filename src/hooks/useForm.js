import { useState } from 'react';

export const useForm = (initialForm) => {
  const [ 
    form, 
    setForm,
  ] = useState({ initialForm });

  const change = ({ target: {name, type, value} }) => {
    setForm({
      ...form,
      [ name ]: value === 'number'
        ? Number(value)
        : value,
    });
  };
  
  return [
    form,
    change,
    () => setForm(initialForm),
  ]
};