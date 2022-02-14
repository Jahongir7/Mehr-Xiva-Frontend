import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import store from './redux/store';
import Login from './pages/Login';
import PrivateRoute from './utility/PrivateRoute';
import DashboardLayout from './layouts/dashboard';
import { AdminRoutes } from './routes';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <DashboardLayout />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <div className="mainContainer">
          <Routes>
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <AdminRoutes />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </ThemeConfig>
    </Provider>
  );
}
