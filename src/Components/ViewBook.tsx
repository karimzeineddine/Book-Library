import { Link, useParams } from 'react-router-dom';

// Mock book data
const books = [
  // ... Your book data
];

function ViewBook() {
  const { id } = useParams(); // Get the book ID from the URL
  const book = books.find((b) => b.id === id); // Find the book by ID

  if (!book) {
    return <div>Book not found!</div>; 
  }

  return (
    <div className='flex gap-20 justify-center items-center h-[650px]'>
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-[500px] w-[400px] hover:h-[470px] hover:w-[370px] rounded' src={book.imageBook} alt={book.title} />
        </div>
        <Link to={`/view-author/${book.author}`}>
          <h1 className='text-3xl font-bold hover:animate-colorChange cursor-pointer'>{book.author}</h1>
        </Link>
      </div>
      <div className='flex flex-col gap-3 max-w-[500px]'>
        <h2 className='font-semibold text-xl text-center'>{book.title}</h2>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default ViewBook;
