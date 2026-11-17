import { useState } from "react";

function AddReference() {

  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(
      "http://localhost:3000/api/references",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          testimonial,
          position,
          company
        })
      }
    );

    alert("Reference Added");
  };

  return (
    <>
      <h2>Add Reference</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Testimonial"
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Reference
        </button>

      </form>
    </>
  );
}

export default AddReference;