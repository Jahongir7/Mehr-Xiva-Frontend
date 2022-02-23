import { Routes, Route } from 'react-router-dom';
import AddStory from './pages/AddStory';
import Company from './pages/Company';
import Companies from './pages/Companies';
import AddCompany from './pages/AddCompany';
import Statistics from './pages/Statistics';
import UpdateStory from './pages/UpdateStory';
import CompanyIndex from './pages/CompanyIndex';

// ----------------------------------------------------------------------
export const AdminRoutes = () => (
  <Routes>
    <Route path="/companies" element={<Companies />} />
    <Route path="/add-company" element={<AddCompany />} />
    <Route path="/add-story" element={<AddStory />} />
    <Route path="/company/:id" element={<CompanyIndex />} />
    <Route path="/update-story/:id" element={<UpdateStory />} />
  </Routes>
);

export const DirectorRoutes = () => (
  <Routes>
    <Route path="/statistics" element={<Statistics />} />
    <Route path="/companies" element={<Companies />} />
    <Route path="/company/:id" element={<Company />} />
  </Routes>
);
