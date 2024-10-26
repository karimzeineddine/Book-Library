// In App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import BookCard from './Components/BookCard';
import ViewBook from './Components/ViewBook';
import ViewAuthor from './Components/ViewAuthor';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/view-book/:id" element={<ViewBook />} />
        <Route path="/view-author/:id" element={<ViewAuthor />} />
        <Route path="/" element={
          <>
            <Hero />
            <BookCard />
          </>
        } />
      </Routes>
    </Router>
  );
}


export default App;
