// src/pages/CreatePostPage.js
import { useState } from 'react';
import { createPost } from '../services/api';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  const [post, setPost] = useState({ title: '', content: '', subreddit: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(post)
      .then((response) => {
        navigate(`/r/${post.subreddit}/comments/${response.id}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            name="content"
            onChange={handleChange}
            placeholder="Content"
            className="w-full mt-1 p-2 border rounded h-32"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Subreddit</label>
          <input
            name="subreddit"
            onChange={handleChange}
            placeholder="Subreddit"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
