import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditUser() {

  const { id } = useParams();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {

    fetch(
      `http://localhost:3000/api/users/${id}`
    )
      .then(res => res.json())
      .then(data => {

        setFirstname(data.data.firstname);
        setLastname(data.data.lastname);
        setEmail(data.data.email);
        setPassword(data.data.password);

      });

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(
      `http://localhost:3000/api/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          updated: new Date()
        })
      }
    );

    alert("User Updated");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Edit User</h2>

      <input
        value={firstname}
        onChange={(e) =>
          setFirstname(e.target.value)
        }
      />

      <br /><br />

      <input
        value={lastname}
        onChange={(e) =>
          setLastname(e.target.value)
        }
      />

      <br /><br />

      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button type="submit">
        Update User
      </button>

    </form>
  );
}

export default EditUser;