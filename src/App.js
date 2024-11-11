import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/r/:subreddit" element={<SubredditPage />} />
          <Route path="/r/:subreddit/comments/:postId" element={<PostDetailPage />} />
          <Route path="/user/:username" element={<UserProfilePage />} />
          <Route path="/submit" element={<CreatePostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
