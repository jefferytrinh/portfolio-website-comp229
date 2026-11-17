import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProject() {

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {

    fetch(
      `${process.env.REACT_APP_API_URL}/api/projects/${id}`
    )
      .then(res => res.json())
      .then(data => {

        setTitle(data.data.title);
        setDescription(data.data.description);
        setImage(data.data.image);
        setLink(data.data.link);

      });

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(
      `${process.env.REACT_APP_API_URL}/api/projects/${id}`,
      {
        method: "PUT",
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

    alert("Project Updated");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Edit Project</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <br /><br />

      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Update Project
      </button>

    </form>
  );
}

export default EditProject;