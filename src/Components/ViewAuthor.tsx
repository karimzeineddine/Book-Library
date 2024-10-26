import { Link } from 'react-router-dom'


function ViewAuthor() {
  return (
    <>
<div>
    <div className='mt-4'>
        <h1 className='text-center text-4xl mb-4'>Author Name And</h1>
    </div>
   <div className='flex justify-around mb-5'>
        <div className='flex flex-col gap-10 max-w-[350px] justify-center'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'>Author Details</h2>
                <p  className='font-bold text-2xl'>Author Name: John Doe</p>
                <p  className='font-bold text-2xl'>Date of Birth: 1990-01-01</p>
                <p  className='font-bold text-2xl'>Nationality: American</p>
                <p  className='font-bold text-2xl'>Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel facilisis eros. Donec vel facilisis eros. Donec vel facilisis eros.</p>
            </div>
            <Link to="/">
            <div>
                <button className='bg-green-700 px-5 py-2 round text-white hover:bg-green-600 hover:text-black active:bg-green-700 active:text-white'>Back to Home</button>
            </div>
            </Link>
        </div>
        <div className='grid grid-cols-3 gap-5 shadow-lg p-5 round'>
            <div className='shadow-lg p-5 round'>
                <img className='h-[200px] w-[150px] m-auto hover:h-[180px] hover:pt-[30px] round' src="public/book-logo.png" alt="" />
            </div>

            <div className='shadow-lg p-5 round'>
                <img className='h-[200px] w-[150px] hover:h-[180px] hover:pt-[30px] round' src="public/book-logo.png" alt="" />
            </div>

            <div className='shadow-lg p-5 round'>
                <img className='h-[200px] w-[150px] hover:h-[180px] hover:pt-[30px] round' src="public/book-logo.png" alt="" />
            </div>

            <div className='shadow-lg p-5 round'>
                <img className='h-[200px] w-[150px] hover:h-[180px] hover:pt-[30px] round' src="public/book-logo.png" alt="" />
            </div>

            <div className='shadow-lg p-5 round'>
                <img className='h-[200px] w-[150px] hover:h-[180px] hover:pt-[30px] round' src="public/book-logo.png" alt="" />
            </div>
            
            <div className='shadow-lg p-5 round'>
                <img className='h-[200px] w-[150px] hover:h-[180px] hover:pt-[30px] round' src="public/book-logo.png" alt="" />
            </div>
        </div>
   </div>
     
</div>
    </>
  )
}

export default ViewAuthor