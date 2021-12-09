// material
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppConversionRates,
  YotoqxonaCard,
  UydagilarCard
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppBugReports />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YotoqxonaCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <UydagilarCard />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
