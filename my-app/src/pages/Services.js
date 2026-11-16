import { useEffect, useState } from "react";

function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/services")
      .then(res => res.json())
      .then(data => setServices(data.data));
  }, []);

  return (
    <>
      <h2>SERVICES</h2>

      <div className="card">
        <h3>My Services</h3>
        <p>I offer many services in regards to website development and design.</p>
        <p>Click on the images below to view my projects:</p>
      </div>

      {services.map(service => (
        <div className="card" key={service.id}>

          <h3>{service.title}</h3>

          <p>
            <a href={service.link} target="_blank" rel="noreferrer">
              <img
                src={service.image}
                className="basic-border"
                alt={service.title}
              />
            </a>
          </p>

          <p>{service.description}</p>

        </div>
      ))}
    </>
  );
}

export default Services;