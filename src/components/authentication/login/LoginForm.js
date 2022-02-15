import { useState, useEffect } from 'react';
// import * as Yup from "yup";
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { Icon } from '@iconify/react';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { useNavigate } from 'react-router-dom';
import { login, checkToken } from '../../../redux/actions/authActions';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  const role = useSelector((state) => state.authReducer.role);
  // const LoginSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Elektron pochta kiritilmadi")
  //     .required("Emailni kiriting"),
  //   password: Yup.string().required("Parolni kiriting"),
  // });
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(checkToken(3600));
      switch (role) {
        case true:
          navigate('/dashboard/companies', { replace: true });
          break;
        case false:
          navigate('/director/companies', { replace: true });
          break;
        default:
          break;
      }
    }
  });
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      onSubmit={async (values) => {
        dispatch(login(values));
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <Stack spacing={3} style={{ marginBottom: 30 }}>
            <TextField
              fullWidth
              autoComplete="username"
              name="userName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              label="Foydalanuvchi nomi"
              value={values.userName}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Yashirin so&#8216;z"
              onChange={handleChange}
              name="password"
              onBlur={handleBlur}
              value={values.password}
              // {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          <LoadingButton fullWidth size="large" type="submit" variant="contained">
            Kirish
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}
