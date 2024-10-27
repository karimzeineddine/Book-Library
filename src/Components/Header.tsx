import { useStore } from '../store/store';

function Header() {
  //@ts-ignore
  const { searchValue, setSearchValue } = useStore();
  //@ts-ignore
  const { setBookValue } = useStore();

  function getSearchValue(bookName: string) {
    // Encode the book name to handle spaces and special characters
    const encodedBookName = encodeURIComponent(bookName);
    const endpoint = `https://openlibrary.org/search.json?q=${encodedBookName}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        // Filter books to ensure they have images and limit the results to 10
        const limitedBooks = data.docs
          .filter((book: { cover_i?: number }) => book.cover_i) // Ensure cover_i exists
          .slice(0, 10)
          .map((book: { title: string; author_name?: string[]; subject?: string[] }) => ({
            ...book,
            title: book.title.trim(),
          }));
        
        // Store limited data in Zustand store
        setBookValue({ ...data, docs: limitedBooks });

        // Log each book's title, authors, and categories if available
        //@ts-ignore
        limitedBooks.forEach((book) => {
          console.log("Title:", book.title);
          if (book.author_name) console.log("Authors:", book.author_name.join(", "));
          if (book.subject) console.log("Categories:", book.subject.join(", "));
          console.log("----");
        });
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }

  return (
    <div className='flex justify-between px-5 py-3 h-14 items-center'>
      <div className='flex gap-3 items-center'>
        <img src="/logo.jpg" alt="LOGO" className='w-[120px]' />
      </div>
      <div className='flex flex-1 max-w-xl'>
        <input 
          className='border flex-grow mr-2 px-3 py-1 rounded' 
          type="text" 
          placeholder="Search..."
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button 
          className='bg-green-600 text-white rounded px-3' 
          onClick={() => getSearchValue(searchValue)}
        >
          Search
        </button>
      </div>
      <div className='flex gap-5 pr-10'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Header;