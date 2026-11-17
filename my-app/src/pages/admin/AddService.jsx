import { useState } from "react";

function AddService() {

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [image, setImage] =
    useState("");

  const [link, setLink] =
    useState("");

  const submit = async (e) => {

    e.preventDefault();

    await fetch(
      "http://localhost:3000/api/services",
      {
        method: "POST",
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

    alert("Added");
  };

  return (
    <form onSubmit={submit}>

      <h2>Add Service</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)}
      />

      <br/>

      <input
        placeholder="Image"
        value={image}
        onChange={(e) =>
          setImage(e.target.value)}
      />

      <br/>

      <input
        placeholder="Link"
        value={link}
        onChange={(e) =>
          setLink(e.target.value)}
      />

      <br/>

      <textarea
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)}
      />

      <br/>

      <button type="submit">
        Save
      </button>

    </form>
  );
}

export default AddService;