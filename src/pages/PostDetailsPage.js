import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostById } from '../services/api';
import Comments from '../components/Comments';
import Loading from '../components/Loading';
import Post from '../components/Post';

function PostDetailPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostById(postId)
        .then((data) => setPost(data))
        .catch((error) => console.error(error));
    }, [postId]);

    if (!post) return <Loading />;

    return (
        <div className="mt-4">
            <Post post={post} />
            <Comments postId={postId} />
        </div>
    );
}

export default PostDetailPage;