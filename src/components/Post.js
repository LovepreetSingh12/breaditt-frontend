import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div className="bg-white shadow rounded mb-4 overflow-hidden">
      <div className="flex">
        {/* Votes Section */}
        <div className="bg-gray-100 text-center p-4">
          {/* Implement upvote/downvote functionality */}
          <button className="block text-gray-500 hover:text-red-500">
            ▲
          </button>
          <span className="text-gray-700 font-bold">{post.voteCount}</span>
          <button className="block text-gray-500 hover:text-blue-500">
            ▼
          </button>
        </div>
        {/* Post Content */}
        <div className="p-4 flex-1">
          <div className="text-sm text-gray-500">
            <Link to={`/r/${post.subreddit}`} className="hover:underline">
              r/{post.subreddit}
            </Link>
            <span> • Posted by </span>
            <Link to={`/user/${post.author}`} className="hover:underline">
              u/{post.author}
            </Link>
          </div>
          <Link
            to={`/r/${post.subreddit}/comments/${post.id}`}
            className="block mt-2"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-700 mt-1">{post.content}</p>
          </Link>
          <div className="text-sm text-gray-500 mt-2">
            <span>{post.commentCount} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;