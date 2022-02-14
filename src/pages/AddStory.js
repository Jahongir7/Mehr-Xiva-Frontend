/* eslint-disable prettier/prettier */
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { getCompany, addStory } from '../redux/actions/adminActions';
import classes from '../css/AddContract.module.css';
// ----------------------------------------------------------------------
const ValidationAddStory = Yup.object().shape({
  company_id: Yup.string().required('Tashkilot tanlanilishi shart!'),
  date: Yup.string().required('Sanani tanlash majburiy!'),
  debit: Yup.number().required('Debit kiritilishi shart!'),
  credit: Yup.number().required('Kredit kiritilishi shart!'),
  description: Yup.string()
    .required('Izoh kiritilishi shart!')
    .min(5, "Izoh kamida 5harf bo'lishi kerak!")
    .max(50, "Izoh ko'pi bilan 50 harf bo'lishi kerak!")
});
export default function AddCompany() {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);
  return (
    <div className={classes.contract_form}>
      <h1>Qaydnoma qo'shish</h1>
      <Formik
        initialValues={{
          date: '',
          debit: '',
          credit: '',
          description: '',
          company_id: companies[0]._id
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addStory(values));
          resetForm({ values: '' });
        }}
        validationSchema={ValidationAddStory}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Stack style={{ marginBottom: 30 }} className={classes.flexx}>
              <div>
                <TextField
                  name="company_id"
                  select
                  label="Tashkilotni tanlang"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company_id}
                  className={classes.contract_input}
                  error={Boolean(touched.company_id && errors.company_id)}
                >
                  {companies && companies.length > 0 ? (
                    companies.map((a) => (
                      <MenuItem key={a._id} value={a._id}>
                        {a.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem>Tanlash</MenuItem>
                  )}
                </TextField>
                <div className={classes.errors}>
                  {errors.company_id && touched.company_id ? <div>{errors.company_id}</div> : null}
                </div>
              </div>
              <div>
                <TextField
                  type="date"
                  value={values.date}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="date"
                  error={Boolean(touched.date && errors.date)}
                />
                <div className={classes.errors}>
                  {errors.date && touched.date ? <div>{errors.date}</div> : null}
                </div>
              </div>
              <div>
                <TextField
                  type="text"
                  label="Qisqacha izoh"
                  value={values.description}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="description"
                  error={Boolean(touched.description && errors.description)}
                />
                <div className={classes.errors}>
                  {errors.description && touched.description ? (
                    <div>{errors.description}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <TextField
                  type="text"
                  label="Debit"
                  value={values.debit}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="debit"
                  error={Boolean(touched.debit && errors.debit)}
                />
                <div className={classes.errors}>
                  {errors.debit && touched.debit ? <div>{errors.debit}</div> : null}
                </div>
              </div>
              <div>
                <TextField
                  type="text"
                  label="Kredit"
                  value={values.credit}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="credit"
                  error={Boolean(touched.credit && errors.credit)}
                />
                <div className={classes.errors}>
                  {errors.credit && touched.credit ? <div>{errors.credit}</div> : null}
                </div>
              </div>
            </Stack>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              style={{ marginLeft: '20px' }}
            >
              Ma'lumotlarni yuborish
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
