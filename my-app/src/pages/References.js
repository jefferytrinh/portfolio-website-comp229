import { useEffect, useState } from "react";

function References() {

  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/references`)
      .then(res => res.json())
      .then(data => setReferences(data.data));
  }, []);

  return (
    <>
      <h2>REFERENCES</h2>

      <div className="card">
        <img
          src="otherstuff/thumbsupimage.png"
          width="100"
          height="100"
          align="right"
          alt="Thumbs Up"
        />

        <h3>Testimonials from Clients</h3>

        <p>
          I have received positive feedback from many of my clients.
        </p>

        <p>
          Here are some testimonials from my satisfied clients:
        </p>
      </div>

      {references.map(reference => (
        <div className="card" key={reference.id}>

          <h3>{reference.name}</h3>

          <p>"{reference.testimonial}"</p>

          <p>
            - {reference.position},
            {" "}
            {reference.company}
          </p>

        </div>
      ))}
    </>
  );
}

export default References;