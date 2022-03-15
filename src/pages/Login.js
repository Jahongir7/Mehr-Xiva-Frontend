// material
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, Stack, Container, Typography } from '@mui/material';
// layouts
// components
import { useSelector, useDispatch } from 'react-redux';
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login/index';
import useWindowDimensions from './ScreenSize';
import { getCompany } from '../redux/actions/adminActions';

import '../App.css';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
  backgroundColor: '#1F62EE'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.adminReducer.companies);
  let cCompanies = [];
  if (companies && companies.length > 0) {
    cCompanies = [...companies];
  }
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);
  console.log(cCompanies);

  return (
    <RootStyle title="Kirish">
      {width > 880 ? (
        <MHidden width="mdDown">
          <SectionStyle>
            <img src="/static/illustrations/as.jpg" alt="login" />
          </SectionStyle>
        </MHidden>
      ) : (
        ''
      )}

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography sx={{ color: 'text.secondary' }}>Ma'lumotlaringizni kiriting.</Typography>
          </Stack>

          <LoginForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
