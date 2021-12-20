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
            <h1>Shartnoma qo'shish</h1>
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack  style={{ marginBottom: 30 }} className={classes.flexx}>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Kompaniya nomi"
                        onChange={onChange}
                        value={myInput}
                        className={classes.contract_input}
                    />
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Masul shaxs"
                        onChange={onChange}
                        value={myInput} className={classes.contract_input}
                    /><TextField
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="Kompaniya raqami"
                    onChange={onChange}
                    value={myInput} className={classes.contract_input}
                /><TextField
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="To'lov miqdori"
                    onChange={onChange}
                    value={myInput} className={classes.contract_input}
                />
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Masul shaxs raqami"
                        onChange={onChange}
                        value={myInput} className={classes.contract_input}
                    />
                </Stack>
                    <LoadingButton
                        size="large"
                        type="button"
                        variant="contained"
                        style={{marginLeft:"20px"}}
                        // onClick={() => myFunc()}
                    >
                        Qo'shish
                    </LoadingButton>
            </Form>
        </FormikProvider></div>
    );
}
