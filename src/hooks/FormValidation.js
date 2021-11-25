import {useState} from 'react';
import isEmail from 'validator/lib/isEmail';

export default function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(true);
  const namePattern = /^[а-яёa-z -]*$/i

  const handleChange = (e) => {
    const {name, value} = e.target
    if (e.target.name === 'email' && !isEmail(value)) {
      e.target.setCustomValidity('Введите email')
    } else if (e.target.name === 'name' && !namePattern.test(value)) {
      e.target.setCustomValidity('Только латиница, кириллица, пробел или дефис')
    } else {
      e.target.setCustomValidity('');
    }
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest('form').checkValidity());
  };

  return { values, handleChange, errors, isValid };
}