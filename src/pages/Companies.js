/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
// material
import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Grid } from '@mui/material';
// utils
import swal from 'sweetalert';
import { deleteCompany, getCompany } from '../redux/actions/adminActions';
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
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));
// ----------------------------------------------------------------------

export default function AppWeeklySales() {
  const role = useSelector((state) => state.authReducer.role);
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.adminReducer.companies);
  let cCompanies = [];

  if (companies && companies.length > 0) {
    cCompanies = [...companies];
  }
  function myFunction1(id) {
    swal("Haqiqatdan ham ushbu tashkilotni o'chirasizmi?", {
      buttons: ["Yo'q", 'Ha']
    }).then((value) => {
      if (value) {
        dispatch(deleteCompany(id));
        dispatch(getCompany());
      }
    });
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
  return (
    <div style={{ marginBottom: 90 }}>
      {role ? (
        <Link
          to="/dashboard/add-company"
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
            Qo'shish
          </LoadingButton>
        </Link>
      ) : (
        ''
      )}
      <Grid container spacing={3}>
        {cCompanies.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item._id}>
            <RootStyle style={{ color: '#fff' }}>
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
                {Math.abs(calculateAge(item.companyPhone))}
              </IconWrapperStyle>
              <Typography variant="subtitle2" style={{ color: 'white', fontSize: '20px' }}>
                Yoshda
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ color: 'white', fontSize: '18px', marginTop: '20px' }}
              >
                Tug'ilgan sana: {item.companyPhone}
              </Typography>
              <Typography variant="subtitle2" style={{ color: 'white', fontSize: '18px' }}>
                Manzil: {item.director}
              </Typography>
              <Typography variant="subtitle2" style={{ color: 'white', fontSize: '18px' }}>
                Telefon: {item.accountantPhone}
              </Typography>
              <LoadingButton
                style={{
                  marginTop: '20px',
                  color: 'white',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  margin: '20px auto'
                }}
              >
                <a
                  href={item.accountant}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', fontSize: '24px' }}
                >
                  Lokatsiya{' '}
                  <Icon
                    icon="carbon:location-filled"
                    width={20}
                    height={20}
                    style={{ color: 'red' }}
                  />
                </a>
              </LoadingButton>
              {role ? (
                <LoadingButton
                  onClick={() => myFunction1(item._id)}
                  style={{ marginTop: '20px', color: 'white' }}
                >
                  <Icon icon="bi:trash" width={24} height={24} />
                </LoadingButton>
              ) : (
                ''
              )}
            </RootStyle>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
