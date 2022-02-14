import { useNavigate, Routes, Route } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import AddStory from './pages/AddStory';
import NotFound from './pages/Page404';
import Company from './pages/Company';
import Companies from './pages/Companies';
import AddCompany from './pages/AddCompany';

// ----------------------------------------------------------------------
export const AdminRoutes = () => (
  <Routes>
    <Route path="/companies" element={<Companies />} />
    <Route path="/add-company" element={<AddCompany />} />
    <Route path="/add-story" element={<AddStory />} />
    <Route path="/company/:id" element={<Company />} />
  </Routes>
);
