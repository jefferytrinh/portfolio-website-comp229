import { useEffect, useState } from "react";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data.data));
  }, []);

  return (
    <>
      <h2>PROJECTS</h2>

      <div className="card">
        <h3>My Work</h3>
        <p>I have made several websites for various purposes in the past.</p>
        <p>Click on the images below to view my projects:</p>
      </div>

      {projects.map(project => (
        <div className="card" key={project.id}>

          <h3>{project.title}</h3>

          <p>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="basic-border"
                alt={project.title}
              />
            </a>
          </p>

          <p>{project.description}</p>

        </div>
      ))}
    </>
  );
}

export default Projects;