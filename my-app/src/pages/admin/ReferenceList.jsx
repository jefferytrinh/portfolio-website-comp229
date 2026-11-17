import { useEffect, useState } from "react";

function ReferenceList() {

  const [references, setReferences] = useState([]);

  useEffect(() => {
    loadReferences();
  }, []);

  const loadReferences = async () => {
    const response = await fetch(
      "http://localhost:3000/api/references"
    );

    const data = await response.json();

    setReferences(data.data);
  };

  const deleteReference = async (id) => {

    await fetch(
      `http://localhost:3000/api/references/${id}`,
      {
        method: "DELETE"
      }
    );

    loadReferences();
  };

  return (
    <div>

      <h2>Manage References</h2>

      {references.map(reference => (

        <div
          className="card"
          key={reference.id}
        >

          <h3>{reference.title}</h3>

          <p>{reference.description}</p>

          <button
            onClick={() =>
              deleteReference(reference.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default ReferenceList;