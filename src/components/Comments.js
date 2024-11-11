import { useState, useEffect } from 'react';
import { getCommentsByPostId, addComment } from '../services/api';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    getCommentsByPostId(postId)
      .then((data) => setComments(data))
      .catch((error) => console.error(error));
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { content: newComment })
      .then((comment) => setComments([...comments, comment]))
      .catch((error) => console.error(error));
    setNewComment('');
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-4">Comments</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded h-24"
          placeholder="Add a comment"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4">
          <p className="text-gray-800">{comment.content}</p>
          <div className="text-sm text-gray-500">
            Posted by u/{comment.author}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;