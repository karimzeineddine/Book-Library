import { useEffect } from 'react';
import { useStore } from '../store/store';

function Hero() {
  //@ts-ignore
  const { trendingBooks, setTrendingBooks } = useStore();
  
  useEffect(() => {
    const fetchTrendingBooks = async () => {
      try {
        const endpoint = `https://openlibrary.org/search.json?q=trending`;
        const response = await fetch(endpoint);
        const data = await response.json();

        //@ts-ignore
        const trendingBooks = data.docs.slice(0, 6).map((book) => ({
          title: book.title,
          description: book.first_publish_year ? `Published in ${book.first_publish_year}` : "No description available",
          coverImageUrl: book.cover_i 
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` 
            : null, // Set to null instead of placeholder
        }));

        // Filter out books without images
        const filteredTrendingBooks = trendingBooks.filter(book => book.coverImageUrl);

        setTrendingBooks(filteredTrendingBooks);
      } catch (error) {
        console.error('Error fetching trending books:', error);
      }
    };
    
    fetchTrendingBooks();
  }, [setTrendingBooks]);
  
  return (
    <div className='flex flex-col items-center mt-8 px-4 md:px-10'>
      {/* Title for Trending Books */}
      <h2 className='text-3xl font-bold text-gray-800 mb-6'>
        Trending Books
      </h2>

      <div className='flex justify-center items-stretch gap-8'>
        {
        //@ts-ignore
        trendingBooks.map((book, index) => (
          <div key={index} className='flex flex-col max-w-[300px] w-full bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg'>
            <div className='h-[350px] overflow-hidden'>
              <img
                src={book.coverImageUrl}
                alt={book.title}
                className='w-full h-full object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110'
              />
            </div>
            <div className='flex flex-col flex-grow p-5 gap-3 bg-slate-900 text-white'>
              <h1 className='text-center text-lg font-semibold leading-tight line-clamp-2'>{book.title}</h1>
              <p className='text-center text-sm text-gray-300 line-clamp-3'>{book.description}</p>
              <div className='flex justify-center mt-auto'>
                <button className='bg-blue-600 px-5 py-2 rounded-full text-white font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 transition'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
