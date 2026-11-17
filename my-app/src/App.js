import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import References from "./pages/References";
import Contact from "./pages/Contact";

import AdminDashboard from "./pages/AdminDashboard";

import ServiceList from "./pages/admin/ServiceList";
import AddService from "./pages/admin/AddService";
import EditService from "./pages/admin/EditService";

import ProjectList from "./pages/admin/ProjectList";
import AddProject from "./pages/admin/AddProject";
import EditProject from "./pages/admin/EditProject";

import ReferenceList from "./pages/admin/ReferenceList";
import AddReference from "./pages/admin/AddReference";
import EditReference from "./pages/admin/EditReference";

import UserList from "./pages/admin/UserList";
import AddUser from "./pages/admin/AddUser";
import EditUser from "./pages/admin/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/admin/services" element={<ServiceList />} />
          <Route path="/admin/services/add" element={<AddService />} />
          <Route path="/admin/services/edit/:id" element={<EditService />} />

          <Route path="/admin/projects" element={<ProjectList />} />
          <Route path="/admin/projects/add" element={<AddProject />} />
          <Route path="/admin/projects/edit/:id" element={<EditProject />} />

          <Route path="/admin/references" element={<ReferenceList />} />
          <Route path="/admin/references/add" element={<AddReference />} />
          <Route path="/admin/references/edit/:id" element={<EditReference />} />

          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/users/add" element={<AddUser />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;