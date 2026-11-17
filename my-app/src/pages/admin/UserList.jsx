import { useEffect, useState } from "react";

function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await fetch(
      "http://localhost:3000/api/users"
    );

    const data = await response.json();

    setUsers(data.data);
  };

  const deleteUser = async (id) => {

    await fetch(
      `http://localhost:3000/api/users/${id}`,
      {
        method: "DELETE"
      }
    );

    loadUsers();
  };

  return (
    <div>

      <h2>Manage Users</h2>

      {users.map(user => (

        <div
          className="card"
          key={user.id}
        >

          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <button
            onClick={() =>
              deleteUser(user.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default UserList;