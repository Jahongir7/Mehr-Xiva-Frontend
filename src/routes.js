import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Hisobot';
import User from './pages/User';
import NotFound from './pages/Page404';
// eslint-disable-next-line import/no-named-as-default
import Groups from './pages/Groups';
import Group1 from './pages/Group1';
import DeanLayout from './layouts/dean';
import DeanApp from './pagesDean/DashboardApp';
import DeanUser from './pagesDean/User';
import DeanGroups from './pagesDean/Groups';
import DeanBlog from './pagesDean/Hisobot';

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
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'groups', element: <Groups /> },
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
