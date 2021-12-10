import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import MinistryDashboard from './layouts/ministry';
import Login from './views/tutor/Login';

// Tutor
import Statistics from './views/tutor/Statistics';
import Products from './views/tutor/Products';
import Blog from './views/tutor/Hisobot';
import User from './views/tutor/User';
import NotFound from './views/tutor/Page404';

// eslint-disable-next-line import/no-named-as-default
// Dean
import Groups from './views/tutor/Groups';
import Group1 from './views/tutor/Group1';
import DeanLayout from './layouts/dean';
import DeanApp from './pagesDean/DashboardApp';
import DeanUser from './pagesDean/User';
import DeanGroups from './pagesDean/Groups';
import DeanBlog from './pagesDean/Hisobot';

// Ministry
import MinistryDash from './pagesMinistry/DashboardApp';
import MinistryUser from './pagesMinistry/User';
import MinistryGroups from './pagesMinistry/Groups';
import MinistryHisobot from './pagesMinistry/Hisobot';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dean',
      element: <DeanLayout />,
      children: [
        { path: 'app', element: <DeanApp /> },
        { path: 'user', element: <DeanUser /> },
        { path: 'faculties', element: <DeanGroups /> },
        { path: 'blog', element: <DeanBlog /> }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/login" replace /> },
        { path: 'app', element: <Statistics /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'groups', element: <Groups /> },
        { path: 'group1', element: <Group1 /> }
      ]
    },
    {
      path: '/ministry',
      element: <MinistryDashboard />,
      children: [
        { element: <Navigate to="/login" replace /> },
        { path: 'app', element: <MinistryDash /> },
        { path: 'user', element: <MinistryUser /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <MinistryHisobot /> },
        { path: 'groups', element: <MinistryGroups /> },
        { path: 'group1', element: <Group1 /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
