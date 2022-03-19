/* eslint-disable default-case */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
// material
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Card, Typography, Grid } from '@mui/material';
// utils
import { getCompany } from '../redux/actions/adminActions';
// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  backgroundColor: theme.palette.primary.light
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '10%',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginTop: theme.spacing(3)
}));
// ----------------------------------------------------------------------

export default function GetBirtday() {
  let mm = new Date().getMonth() + 1;
  let b = '';
  switch (mm) {
    case 1:
      b = 'Yanvar';
      break;
    case 2:
      b = 'Fevral';
      break;
    case 3:
      b = 'Mart';
      break;
    case 4:
      b = 'Aprel';
      break;
    case 5:
      b = 'May';
      break;
    case 6:
      b = 'Iyun';
      break;
    case 7:
      b = 'iyul';
      break;
    case 8:
      b = 'Avgust';
      break;
    case 9:
      b = 'Sentyabr';
      break;
    case 10:
      b = 'Oktyabr';
      break;
    case 11:
      b = 'Noyabr';
      break;
    case 12:
      b = 'Dekabr';
      break;
  }
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.adminReducer.companies);
  let cCompanies = [];

  if (companies && companies.length > 0) {
    cCompanies = [...companies];
  }
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  const calculateAge = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var ageNow = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageNow -= 1;
    }
    return ageNow;
  };
  const calculateMonth = (month) => {
    var thisMonth = new Date().getMonth();
    var birthMonth = new Date(month).getMonth();
    return birthMonth - thisMonth;
  };
  const calculateDay = (birthday) => {
    var today = new Date();
    var birthDate = new Date(birthday);
    var ageNow = today.getMonth() - birthDate.getMonth();
    var m = birthDate.getDate() - today.getDate();
    if (ageNow > 1) {
      return 0;
    }
    return m;
  };

  return (
    <div style={{ marginBottom: 90 }}>
      <Link
        to="/login"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textDecoration: 'none',
          marginBottom: 20
        }}
      >
        <LoadingButton size="large" type="button" variant="contained">
          Admin
        </LoadingButton>
      </Link>
      <Typography
        variant="subtitle2"
        style={{ fontSize: '25px', marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}
      >
        {b} oyidagi tug'ilgan kunlar
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {cCompanies.map((item) =>
          calculateMonth(item.companyPhone) === 0 && calculateDay(item.companyPhone) > 0 ? (
            <Grid item xs={12} sm={6} md={3} key={item._id}>
              <RootStyle
                style={{
                  color: '#fff',
                  backgroundColor: `${calculateDay(item.companyPhone) > 0 ? '#1F62EE' : 'red'}`,
                  padding: '47px'
                }}
              >
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '23px' }}>
                  {item.name}
                </Typography>
                <IconWrapperStyle
                  style={{
                    backgroundColor: 'inherit',
                    color: '#fff',
                    fontSize: '23px',
                    fontWeight: 'bolder',
                    border: 'none',
                    boxShadow: 'inset 0px 0px 15px #f2f2f2'
                  }}
                >
                  {calculateDay(item.companyPhone)}
                </IconWrapperStyle>
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '20px' }}>
                  kundan keyin tug'ilgan kuni
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ color: 'white', fontSize: '18px', marginTop: '20px' }}
                >
                  Hozirda {calculateAge(item.companyPhone)} yoshda
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '18px' }}>
                  Manzil: {item.director}
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '18px' }}>
                  Telefon: {item.accountantPhone}
                </Typography>
              </RootStyle>
            </Grid>
          ) : (
            ''
          )
        )}
      </Grid>
      <Typography
        variant="subtitle2"
        style={{ fontSize: '25px', marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}
      >
        Tug'ilgan kuni ortda qolganlar
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {cCompanies.map((item) =>
          calculateMonth(item.companyPhone) === 0 && calculateDay(item.companyPhone) < 0 ? (
            <Grid item xs={12} sm={6} md={3} key={item._id}>
              <RootStyle
                style={{
                  color: '#fff',
                  backgroundColor: 'red',
                  padding: '30px'
                }}
              >
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '23px' }}>
                  {item.name}
                </Typography>
                <IconWrapperStyle
                  style={{
                    backgroundColor: 'inherit',
                    color: '#fff',
                    fontSize: '23px',
                    fontWeight: 'bolder',
                    border: 'none',
                    boxShadow: 'inset 0px 0px 15px #f2f2f2'
                  }}
                >
                  {Math.abs(calculateDay(item.companyPhone))}
                </IconWrapperStyle>
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '20px' }}>
                  kun avval tug'ilgan kuni nishonlandi
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ color: 'white', fontSize: '18px', marginTop: '20px' }}
                >
                  Hozirda {calculateAge(item.companyPhone) + 1} yoshda
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '18px' }}>
                  Manzil: {item.director}
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'white', fontSize: '18px' }}>
                  Telefon: {item.accountantPhone}
                </Typography>
              </RootStyle>
            </Grid>
          ) : (
            ''
          )
        )}
      </Grid>
    </div>
  );
}
