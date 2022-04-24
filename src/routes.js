import { Routes, Route } from 'react-router-dom';
import AddStory from './pages/AddStory';
import Company from './pages/Company';
import Companies from './pages/Companies';
import AddCompany from './pages/AddCompany';
import Statistics from './pages/Statistics';
import UpdateStory from './pages/UpdateStory';
import CompanyIndex from './pages/CompanyIndex';
import ChildTable from './pages/Child';

// ----------------------------------------------------------------------
export const AdminRoutes = () => (
  <Routes>
    <Route path="/companies" element={<Companies />} />
    <Route path="/add-company" element={<AddCompany />} />
    <Route path="/add-story" element={<AddStory />} />
    <Route path="/company/:id" element={<CompanyIndex />} />
    <Route path="/update-story/:id" element={<UpdateStory />} />
    <Route path="/list" element={<ChildTable />} />
  </Routes>
);

export const DirectorRoutes = () => (
  <Routes>
    <Route path="/statistics" element={<Statistics />} />
    <Route path="/companies" element={<Companies />} />
    <Route path="/company/:id" element={<Company />} />
  </Routes>
);
