/* eslint-disable prettier/prettier */
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import { addCompany } from "../redux/actions/adminActions";
import classes from "../css/AddContract.module.css";
// ----------------------------------------------------------------------
const ValidationAddCompany = Yup.object().shape({
  name: Yup.string()
    .required("Ism kiritilishi shart!")
    .min(3, "Ism kamida 3 ta harfdan iborat bo'lishi kerak!")
    .max(20, "Ism ko'pi bilan 20 ta harfdan iborat bo'lishi kerak!"),
  director: Yup.string()
    .required("Ism kiritilishi shart!")
    .min(3, "Ism kamida 3 ta harfdan iborat bo'lishi kerak!")
    .max(20, "Ism ko'pi bilan 20 ta harfdan iborat bo'lishi kerak!"),
  accountant: Yup.string()
    .required("Ism kiritilishi shart!")
    .min(3, "Ism kamida 3 ta harfdan iborat bo'lishi kerak!")
    .max(20, "Ism ko'pi bilan 20 ta harfdan iborat bo'lishi kerak!"),
  companyPhone: Yup.string()
    .required("Telefon raqam kiritilishi shart!")
    .min(7, "Telefon raqam noto'g'ri kiritildi!")
    .max(14, "Telefon raqam noto'g'ri kiritildi!"),
  accountantPhone: Yup.string()
    .required("Telefon raqam kiritilishi shart!")
    .min(7, "Telefon raqam noto'g'ri kiritildi!")
    .max(14, "Telefon raqam noto'g'ri kiritildi!"),
});
export default function AddCompany() {
  const dispatch = useDispatch();
  return (
    <div className={classes.contract_form}>
      <h1>Tashkilot qo'shish</h1>
      <Formik
        initialValues={{
          name: "",
          director: "",
          companyPhone: "",
          accountant: "",
          accountantPhone: "",
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addCompany(values));
          resetForm();
        }}
        validationSchema={ValidationAddCompany}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <Stack style={{ marginBottom: 30 }} className={classes.flexx}>
              <div>
                <TextField
                  autoComplete="username"
                  type="text"
                  label="Tashkilot nomi"
                  value={values.name}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  error={Boolean(touched.name && errors.name)}
                />
                <div className={classes.errors}>
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <TextField
                  autoComplete="username"
                  type="text"
                  label="Directori"
                  value={values.director}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="director"
                  error={Boolean(touched.director && errors.director)}
                />
                <div className={classes.errors}>
                  {errors.director && touched.director ? (
                    <div>{errors.director}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <TextField
                  autoComplete="username"
                  type="text"
                  label="Tashkilot telefon raqami"
                  value={values.companyPhone}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="companyPhone"
                  error={Boolean(touched.companyPhone && errors.companyPhone)}
                />
                <div className={classes.errors}>
                  {errors.companyPhone && touched.companyPhone ? (
                    <div>{errors.companyPhone}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <TextField
                  autoComplete="username"
                  type="text"
                  label="Buxgalteri"
                  value={values.accountant}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="accountant"
                  error={Boolean(touched.accountant && errors.accountant)}
                />
                <div className={classes.errors}>
                  {errors.accountant && touched.accountant ? (
                    <div>{errors.accountant}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <TextField
                  autoComplete="username"
                  type="text"
                  label="Buxgalter telefon raqami"
                  value={values.accountantPhone}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="accountantPhone"
                  error={Boolean(
                    touched.accountantPhone && errors.accountantPhone
                  )}
                />
                <div className={classes.errors}>
                  {errors.accountantPhone && touched.accountantPhone ? (
                    <div>{errors.accountantPhone}</div>
                  ) : null}
                </div>
              </div>
            </Stack>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              style={{ marginLeft: "20px" }}
            >
              Ma'lumotlarni yuborish
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
