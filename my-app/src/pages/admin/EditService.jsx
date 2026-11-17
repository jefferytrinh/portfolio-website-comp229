import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditService() {

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {

    fetch(
      `http://localhost:3000/api/services/${id}`
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
      `http://localhost:3000/api/services/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          image,
          link
        })
      }
    );

    alert("Service Updated");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Edit Service</h2>

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)}
      />

      <br /><br />

      <input
        value={image}
        onChange={(e) =>
          setImage(e.target.value)}
      />

      <br /><br />

      <input
        value={link}
        onChange={(e) =>
          setLink(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Update
      </button>

    </form>
  );
}

export default EditService;