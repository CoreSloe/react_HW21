import React, { useState } from "react";
import authors from "./authors";
import "./PostForm.css"; // Імпортуємо файли стилів// Імпортуємо фейкові дані авторів

function PostForm({ onAddPost }) {
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [authorId, setAuthorId] = useState(1); // За замовчуванням вибираємо першого автора

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthorId(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      author: authors.find((author) => author.id === authorId),
      content,
      image: imageURL,
      date: new Date().toLocaleDateString(),
    };
    // Викликаємо функцію зовнішнього компонента, щоб додати нову публікацію
    onAddPost(newPost);
    // Очищаємо поля після додавання публікації
    setContent("");
    setImageURL("");
    setAuthorId(1);
  };

  return (
    <div className="post-form">
      <h2>Додати нову публікацію</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="content">Текст публікації:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Посилання на зображення:</label>
          <input
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={handleImageURLChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Автор:</label>
          <select
            id="author"
            value={authorId}
            onChange={handleAuthorChange}
            required
          >
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name} ({author.nickname})
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Додати</button>
      </form>
    </div>
  );
}

export default PostForm;
