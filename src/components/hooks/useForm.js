import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import validators from './validators';

const useForm = (submitForm) => {
  const navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const [dataIsCorrect, setDataIsCorrect] = useState(false);
    
      const onUpdateField = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmitForm = (e) => {
        e.preventDefault();
        setErrors(validators(values));
        setDataIsCorrect(true);
        if(values.email !== 'admin@abc.com' || values.password !== 'Password@1')
        return Swal.fire({icon: 'error',title: 'Oops...', text: 'Invalid email or password'});
        navigate('/dashbord')
        localStorage.setItem('auth', true)
      };
    
      useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
          submitForm(true);
        }else if (localStorage.getItem('auth')) navigate('/')
      }, [errors]);

  return {onUpdateField, onSubmitForm, errors, values};
}

export default useForm