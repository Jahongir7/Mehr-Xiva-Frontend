import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
import {   Stack, TextField } from '@mui/material';

import classes from "../css/AddContract.module.css"
// ----------------------------------------------------------------------

export default function AddContract() {
    const navigate = useNavigate();
    const [myInput, setMyInput] = useState('');

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

    const {  isSubmitting, handleSubmit } = formik;

    const onChange = (event) => {
        setMyInput(event.target.value);
    };

 // function myFunc(){
 //     axios
 //         .get('http://', {
 //             title: "Hello World!",
 //             body: "This is a new post."
 //         })
 //         .then((response) => {
 //             setPost(response.data);
 //         });
 // }

    // if (!post) return "No post!"
    // }
    return (
        <div className={classes.contract_form}>
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3} style={{ marginBottom: 30 }} className={classes.flexx}>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label=""
                        onChange={onChange}
                        value={myInput}
                    />
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Foydalanuvchi nomi"
                        onChange={onChange}
                        value={myInput}
                    /><TextField
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="Foydalanuvchi nomi"
                    onChange={onChange}
                    value={myInput}
                /><TextField
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="Foydalanuvchi nomi"
                    onChange={onChange}
                    value={myInput}
                />
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Foydalanuvchi nomi"
                        onChange={onChange}
                        value={myInput}
                    />
                </Stack>
                <Link to="/dashboard/tasks" style={{ textDecoration: 'none' }}>
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="button"
                        variant="contained"
                        // onClick={() => myFunc()}
                    >
                        Kirish
                    </LoadingButton>
                </Link>
            </Form>
        </FormikProvider></div>
    );
}
