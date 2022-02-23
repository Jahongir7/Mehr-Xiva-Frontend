/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { Stack, TextField } from '@mui/material';
import { updateStory } from '../redux/actions/adminActions';
import classes from '../css/AddContract.module.css';
// ----------------------------------------------------------------------
export default function UpdateStory(item, handleShow) {
  const dispatch = useDispatch();
  const data = item.defaultData;
  const bool = null;
  console.log(item);
  return (
    <div className={classes.contract_form} style={{ height: '100vh' }}>
      <h1>Qaydnomani yangilash</h1>
      <Formik
        initialValues={{
          date: data.date,
          debit: data.debit,
          credit: data.credit,
          description: data.description
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(updateStory(values, data._id));
          resetForm({ values: '' });
          handleShow(bool);
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Stack style={{ marginBottom: 30 }} className={classes.flexx}>
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
              Ma'lumotni yangilash
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
