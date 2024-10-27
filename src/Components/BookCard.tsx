import { Link } from 'react-router-dom';
import { useStore } from '../store/store';

function BookCard() {
  //@ts-ignore
  const { searchBook } = useStore();

  return (
    <div className='grid grid-cols-5 p-20 justify-items-center gap-5'>
      {searchBook.docs && searchBook.docs.length > 0 ? (
        searchBook.docs.map((book: any) => ( // Change 'string' to 'any' for proper typing
          //@ts-ignore
          <Link to={`/view-book/${book.key.split('/')[2]}`} key={book.key} className='hover:border hover:shadow-lg hover:px-7 hover:py-3 rounded'>
            <div className='flex flex-col items-center'>
              <img
                className='rounded h-48 w-32 object-cover' // Set a fixed height and width for the image
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                //@ts-ignore
                alt={book.title}
              />
              <div className='text-center'>
                <h2 className='hover:text-[orange] cursor-pointer'>
                  {//@ts-ignore 
                  book.title}
                </h2>
                <p className='hover:cursor-pointer hover:text-[#d0a046]'>
                  {
                    //@ts-ignore
                    book.author_name ? book.author_name.join(', ') : 'Unknown Author'
                  }
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className='flex justify-center items-center w-full'>
          <h1 className='text-4xl'>Search for a book inside the search bar</h1>
        </div>
      )}
    </div>
  );
}

export default BookCard;
