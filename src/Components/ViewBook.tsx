import { Link, useParams } from 'react-router-dom';
import { useStore } from '../store/store';

function ViewBook() {
  const { id } = useParams(); // Get the book ID from the URL parameters
  //@ts-ignore
  const { searchBook } = useStore();

  // Find the specific book based on the ID
  //@ts-ignore
  const book = searchBook.docs?.find((book) => book.key.split('/')[2] === id);

  return (
    <div className='w-full flex justify-center items-center pt-10'>
      {book ? ( // Check if the book is found
        <div key={book.key} className='flex flex-row gap-16'>
          <div className='flex flex-col gap-4'>
            {book.cover_i ? (
              <img
                className='h-[400px] w-[300px] hover:h-[470px] hover:w-[370px] rounded'
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            ) : (
              <p>No cover image available.</p>
            )}
          </div>
          <div className='flex flex-col gap-3 max-w-[500px]'>
            <Link to={`/view-author/${book.author_key}`}> {/* Ensure book.author_key is the correct identifier */}
              <h1 className='text-3xl font-bold hover:animate-colorChange cursor-pointer'>
                {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
              </h1>
            </Link>

            <h2 className='font-bold text-xl'>{book.title}</h2>
            <p>{book.first_sentence || 'No description available.'}</p>
          </div>
        </div>
      ) : (
        <p>No book found. Please check your selection.</p>
      )}
    </div>
  );
}

export default ViewBook;
