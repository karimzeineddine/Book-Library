import { Link } from 'react-router-dom';
import { useStore } from '../store/store';

function BookCard() {
  const { searchBook  } = useStore();

  return (
    <div className='grid grid-cols-5 p-20 justify-items-center gap-5'>
      {searchBook.docs && searchBook.docs.length > 0 ? (
        searchBook.docs.map((book) => (
          <Link to={`/view-book/${book.key.split('/')[2]}`} key={book.key} className='hover:border hover:shadow-lg hover:px-7 hover:py-3 round'>
            <div>
              <img
                className='round'
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            </div>
            <div>
              <h2 className='hover:text-[orange] cursor-pointer'>{book.title}</h2>
              <p className='hover:cursor-pointer hover:text-[#d0a046]'>
                {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>No books found with images. Try a different search.</p>
      )}
    </div>
  );
}

export default BookCard;
