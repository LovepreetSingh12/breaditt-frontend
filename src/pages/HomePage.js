import Loading from '../components/Loading';
import Error from '../components/Error';
import Post from '../components/Post';
import { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import InfiniteScroll from 'react-infinite-scroll-component';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const fetchMorePosts = () => {
    getPosts(page + 1)
      .then((newPosts) => {
        setPosts([...posts, ...newPosts]);
        setPage(page + 1);
        if (newPosts.length === 0) setHasMore(false);
      })
      .catch((error) => console.error(error));
  };

  if (loading) return <Loading />;
  if (error) return <Error message="Failed to load posts." />;

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMorePosts}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={<p className="text-center">Yay! You have seen it all</p>}
    >
        <div className="mt-4">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    </InfiniteScroll>
  );
}


export default HomePage;