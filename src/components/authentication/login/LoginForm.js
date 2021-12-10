/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { LoadingButton } from '@mui/lab';
import classes from '../../../css/LoginInput.module.css';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [myInput, setMyInput] = useState('');
  const [myInput1, setMyInput1] = useState('');

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Eloktron pochta kiritilmadi').required('Emailni kiriting'),
    password: Yup.string().required('Parolni kiriting')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const onChange = (event) => {
    setMyInput(event.target.value);
  };
  const onChange1 = (event) => {
    setMyInput1(event.target.value);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className={classes.flex}>
          <div className={classes.column_input}>
            <div className={classes.input_p}>
              <p>Lavozim</p>
            </div>
            <input
              type="text"
              name="name"
              onChange={onChange}
              value={myInput}
              placeholder="Lavozim"
            />
          </div>{' '}
          <div className={classes.column_input}>
            <div className={classes.input_p}>
              <p>Parol</p>
            </div>
            <input
              type="text"
              name="surname"
              onChange={onChange1}
              value={myInput1}
              placeholder="Parol"
            />
          </div>
        </div>{' '}
        <Link
          to={myInput === 'tutor' ? '/dashboard/app' : '/dean/app'}
          style={{ textDecoration: 'none' }}
        >
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </Link>
      </Form>
    </FormikProvider>
  );
}
