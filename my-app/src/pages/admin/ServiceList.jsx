import { useEffect, useState } from "react";

function ServiceList() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const response = await fetch(
      "http://localhost:3000/api/services"
    );

    const data = await response.json();

    setServices(data.data);
  };

  const deleteService = async (id) => {

    await fetch(
      `http://localhost:3000/api/services/${id}`,
      {
        method: "DELETE"
      }
    );

    loadServices();
  };

  return (
    <div>

      <h2>Manage Services</h2>

      {services.map(service => (

        <div
          className="card"
          key={service.id}
        >

          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <button
            onClick={() =>
              deleteService(service.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default ServiceList;