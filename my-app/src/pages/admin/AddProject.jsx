import { useState } from "react";

function AddProject() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(
      "http://localhost:3000/api/projects",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          image,
          link
        })
      }
    );

    alert("Project Added");
  };

  return (
    <>
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Image Path"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Project
        </button>

      </form>
    </>
  );
}

export default AddProject;