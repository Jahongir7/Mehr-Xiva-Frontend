import { Icon } from '@iconify/react';
import { Grid } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Waiters from '../components/_dashboard/hisobot/Waiters';

import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales
} from '../components/dean/hisobot';

import classes from '../css/Hisobot.module.css';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));
export default function DeanBlog() {
  return (
    <div className={classes.myContainer}>
      <div className={classes.allSum}>
        <IconWrapperStyle>
          <Icon icon="emojione:dollar-banknote" width="24" height="24" />
        </IconWrapperStyle>
        <h1>3,150,000</h1>
        <p>Umumiy to'langan pul ( Setyabr(2021) - Dekabr(2021) )</p>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWeeklySales />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppNewUsers />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppItemOrders />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppBugReports />
        </Grid>
      </Grid>
      <Waiters />
    </div>
  );
}
