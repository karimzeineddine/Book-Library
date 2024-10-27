import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ViewAuthor() {
  const { authorId } = useParams(); // Get the author ID from the URL parameters
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchAuthorDetails = async () => {
      const response = await fetch(`https://openlibrary.org/authors/${authorId}.json`);
      const data = await response.json();
      setAuthor(data);

      // Fetch author's works
      const worksResponse = await fetch(`https://openlibrary.org/authors/${authorId}/works.json`);
      const worksData = await worksResponse.json();
      setBooks(worksData.entries);
    };

    fetchAuthorDetails();
  }, [authorId]);

  return (
    <div>
      <div className='mt-4'>
        <h1 className='text-center text-4xl mb-4'>{
        //@ts-ignore
        author ? author.name : 'Loading...'}</h1>
      </div>
      <div className='flex justify-center pt-10 gap-16'>
        <div className=''>
            {author && (
              <img
              //@ts-ignore
                src={`https://covers.openlibrary.org/a/olid/${author.key.split('/')[2]}-S.jpg`} // Update this line if you have a specific image URL
                alt={
                    //@ts-ignore
                    author.name}
                className='h-[400px] w-[300px] hover:h-[470px] hover:w-[370px] rounded' // Add your desired styles
              />
            )}    
        </div>
        <div className='flex flex-col gap-10 w-[500px] '>
          <div className='flex flex-col'>
            <h2 className='font-bold text-2xl'>Author Details</h2>
            <p className='font-bold text-2xl'>Author Name: {
            //@ts-ignore
            author ? author.name : 'Loading...'}</p>
            <p className='font-bold text-2xl'>Date of Birth: {
            //@ts-ignore
            author?.birth_date || 'N/A'}</p>
            <p className='font-bold text-2xl'>Nationality: {
            //@ts-ignore
            author?.nationality || 'N/A'}</p>
            <p className='font-bold text-2xl'>Biography: {
            //@ts-ignore
            author?.bio || 'No biography available.'}</p>
            {/* Display author image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAuthor;
