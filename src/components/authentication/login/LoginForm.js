import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [myInput, setMyInput] = useState('');
  const [myInput1, setMyInput1] = useState('');

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Elektron pochta kiritilmadi').required('Emailni kiriting'),
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
      navigate('/tutor', { replace: true });
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

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
        <Stack spacing={3} style={{ marginBottom: 30 }}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Foydalanuvchi nomi"
            onChange={onChange}
            value={myInput}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Yashirin so&#8216;z"
            onChange={onChange1}
            value={myInput1}
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>
        <Link to="/dashboard/app" style={{ textDecoration: 'none' }}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Kirish
          </LoadingButton>
        </Link>
      </Form>
    </FormikProvider>
  );
}
