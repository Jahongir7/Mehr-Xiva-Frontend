import { Routes, Route } from 'react-router-dom';
import AddStory from './pages/AddStory';
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
