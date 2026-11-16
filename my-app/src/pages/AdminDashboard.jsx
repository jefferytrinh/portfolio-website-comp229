import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <>
      <div>
        <h2>ADMIN DASHBOARD</h2>

        <ul>
          <li><Link to="/services">Manage Services</Link></li>
          <li><Link to="/projects">Manage Projects</Link></li>
          <li><Link to="/references">Manage References</Link></li>
          <li><Link to="/users">Manage Users</Link></li>
        </ul>
      </div>
    </>
  );
}

export default AdminDashboard;