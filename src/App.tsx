// In App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import BookCard from './Components/BookCard';
import ViewBook from './Components/ViewBook';
import ViewAuthor from './Components/ViewAuthor';
import Login from './Components/LoginForm'; // Import the Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/view-book/:id" element={<ViewBook />} />
        <Route path="/view-author/:authorId" element={<ViewAuthor />} />
        <Route path="/" element={<Login />} /> {/* Set Login as the default route */}
        <Route path="/home" element={
          <>
            <Header />
            <Hero />
            <BookCard />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
