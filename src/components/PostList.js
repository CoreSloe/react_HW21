import React, { useState } from "react";
import { FaComment, FaRetweet, FaHeart, FaDownload } from "react-icons/fa";
import "./PostList.css";

function PostList({ posts }) {
  // Стан для зберігання лічильників
  const [counters, setCounters] = useState({
    comments: 0,
    reposts: 0,
    likes: 0,
    downloads: 0,
  });

  // Стан для відстеження поточного стану лічильника (збільшення або зменшення)
  const [increaseCount, setIncreaseCount] = useState(true);

  // Функція для зміни лічильника
  const handleChangeCounter = (icon) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [icon]: increaseCount ? prevCounters[icon] + 1 : prevCounters[icon] - 1,
    }));

    // Змінюємо стан для наступного кліку (збільшення або зменшення)
    setIncreaseCount((prevIncreaseCount) => !prevIncreaseCount);
  };

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <div className="post-header">
            <img
              className="author-photo"
              src={post.author.photo}
              alt="Author"
            />
            <div className="author-info">
              <h2 className="author-name">{post.author.name}</h2>
              <p className="author-nickname">{post.author.nickname}</p>
            </div>
          </div>
          <p className="post-date">{post.date}</p>
          <p className="post-content">{post.content}</p>
          <img className="post-image" src={post.image} alt="Post" />

          {/* Додавання іконок коментарів, репостів, лайків і завантажень */}
          <div className="post-icons">
            <span
              className="comment-icon"
              onClick={() => handleChangeCounter("comments")}
            >
              <FaComment />
              {counters.comments}
            </span>
            <span
              className="comment-icon"
              onClick={() => handleChangeCounter("reposts")}
            >
              <FaRetweet />
              {counters.reposts}
            </span>
            <span
              className="comment-icon"
              onClick={() => handleChangeCounter("likes")}
            >
              <FaHeart />
              {counters.likes}
            </span>
            <span
              className="comment-icon"
              onClick={() => handleChangeCounter("downloads")}
            >
              <FaDownload />
              {counters.downloads}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
