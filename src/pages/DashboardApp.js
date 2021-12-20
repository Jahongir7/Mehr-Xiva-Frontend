// material
import { Container } from '@mui/material';
// components
import Page from '../components/Page';
import {

  AppWeeklySales

} from '../components/_dashboard/app';
import Contracts from "./Contracts";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Tashkilotlar">
      <Container maxWidth="xl">
        <AppWeeklySales />
        <Contracts/>
      </Container>
    </Page>
  );
}
