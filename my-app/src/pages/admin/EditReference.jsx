import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditReference() {

  const { id } = useParams();

  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {

    fetch(
      `${process.env.REACT_APP_API_URL}/api/references/${id}`
    )
      .then(res => res.json())
      .then(data => {

        setName(data.data.name);
        setTestimonial(data.data.testimonial);
        setPosition(data.data.position);
        setCompany(data.data.company);

      });

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(
      `${process.env.REACT_APP_API_URL}/api/references/${id}`,
      {
        method: "PUT",
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

    alert("Reference Updated");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Edit Reference</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <br /><br />

      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br /><br />

      <textarea
        value={testimonial}
        onChange={(e) => setTestimonial(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Update Reference
      </button>

    </form>
  );
}

export default EditReference;