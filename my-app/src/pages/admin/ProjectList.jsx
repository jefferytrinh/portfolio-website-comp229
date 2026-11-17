import { useEffect, useState } from "react";

function ProjectList() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const response = await fetch(
      "http://localhost:3000/api/projects"
    );

    const data = await response.json();

    setProjects(data.data);
  };

  const deleteProject = async (id) => {

    await fetch(
      `http://localhost:3000/api/projects/${id}`,
      {
        method: "DELETE"
      }
    );

    loadProjects();
  };

  return (
    <div>

      <h2>Manage Projects</h2>

      {projects.map(project => (

        <div
          className="card"
          key={project.id}
        >

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <button
            onClick={() =>
              deleteProject(project.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default ProjectList;