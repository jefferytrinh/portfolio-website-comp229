import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <>
      <h2>ADMIN DASHBOARD</h2>

      <div className="card">
        <ul>
          <li><Link to="/admin/projects">Manage Projects</Link></li>
          <li><Link to="/admin/projects/add">Add Project</Link></li>

          <li><Link to="/admin/services">Manage Services</Link></li>
          <li><Link to="/admin/services/add">Add Service</Link></li>

          <li><Link to="/admin/references">Manage References</Link></li>
          <li><Link to="/admin/references/add">Add Reference</Link></li>

          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/users/add">Add User</Link></li>
        </ul>
      </div>
    </>
  );
}

export default AdminDashboard;