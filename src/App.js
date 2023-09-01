import React, { useState } from "react";
import PostForm from "./PostForm"; // Імпортуємо компонент форми
import PostList from "./components/PostList"; // Імпортуємо компонент для відображення публікацій
import "./App.css";

const ANAKIN_IMAGE =
  "https://ssb.wiki.gallery/images/thumb/9/99/Anakin_SSBU.png/200px-Anakin_SSBU.png";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

function App() {
  // Припустимо, що у вас є початковий список публікацій у стані додатку
  const initialPosts = [
    {
      author: {
        name: "Anakin Skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: RAY_IMAGE,
      date: "26 февр.",
    },
    // Додайте інші публікації, які маєте
  ];

  // Створіть стан для зберігання публікацій
  const [posts, setPosts] = useState(initialPosts);

  // Функція для додавання нової публікації
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app">
      <PostForm onAddPost={addPost} />{" "}
      {/* Передаємо функцію для додавання публікації в форму */}
      <PostList posts={posts} />{" "}
      {/* Передаємо список публікацій для відображення */}
    </div>
  );
}

export default App;
