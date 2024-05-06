import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Cuisine:
        <input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
        />
      </label>
      <label>
        Photo URL:
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
        />
      </label>
      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Preparation:
        <textarea
          name="preparation"
          value={formData.preparation}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;
