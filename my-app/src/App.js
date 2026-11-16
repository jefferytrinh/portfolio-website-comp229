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

import ProjectList from "./pages/admin/ProjectList";
import AddProject from "./pages/admin/AddProject";

import ReferenceList from "./pages/admin/ReferenceList";
import AddReference from "./pages/admin/AddReference";

import UserList from "./pages/admin/UserList";
import AddUser from "./pages/admin/AddUser";

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

          <Route path="/admin/projects" element={<ProjectList />} />
          <Route path="/admin/projects/add" element={<AddProject />} />

          <Route path="/admin/references" element={<ReferenceList />} />
          <Route path="/admin/references/add" element={<AddReference />} />

          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/users/add" element={<AddUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;