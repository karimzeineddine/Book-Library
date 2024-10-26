
function Hero() {
  return (
    <div className='flex justify-center items-center mt-8 gap-10 px-10 '>
      <div className='flex items-center'>
        <div className='max-h-[350px]'>
        <img
          src="public/book-logo.png"
          alt="LOGO"
          className='rounded-xl'
          style={{
            transform: 'translateX(15px) skew(+7deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        </div>
        
        
        <div className='flex flex-col w-[300px] h-[240px] pt-5 p-10 gap-3 rounded-r-[12px] bg-slate-800 text-white'>
          <h1 className='text-center'>Books Head</h1>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error, corrupti veritatis autem ducimus voluptas sapiente sequi maxime non exercitationem ratione laborum dolorum impedit explicabo ut eaque.</p>
          <div className='flex justify-center'>
          <button className='bg-slate-700 w-fit p-2 rounded hover:bg-slate-500 active:bg-slate-300 active:text-black'>Read More</button>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='max-h-[350px]'>
        <img
          src="public/book-logo.png"
          alt="LOGO"
          className='rounded-xl'
          style={{
            transform: 'translateX(15px) skew(+7deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        </div>
        
        
        <div className='flex flex-col w-[300px] h-[240px] pt-5 p-10 gap-3 rounded-r-[12px] bg-slate-800 text-white'>
          <h1 className='text-center'>Books Head</h1>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error, corrupti veritatis autem ducimus voluptas sapiente sequi maxime non exercitationem ratione laborum dolorum impedit explicabo ut eaque.</p>
          <div className='flex justify-center'>
          <button className='bg-slate-700 w-fit p-2 rounded hover:bg-slate-500 active:bg-slate-300 active:text-black'>Read More</button>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='max-h-[350px]'>
        <img
          src="public/book-logo.png"
          alt="LOGO"
          className='rounded-xl'
          style={{
            transform: 'translateX(15px) skew(+7deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        </div>
        
        
        <div className='flex flex-col w-[300px] h-[240px] pt-5 p-10 gap-3 rounded-r-[12px] bg-slate-800 text-white'>
          <h1 className='text-center'>Books Head</h1>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error, corrupti veritatis autem ducimus voluptas sapiente sequi maxime non exercitationem ratione laborum dolorum impedit explicabo ut eaque.</p>
          <div className='flex justify-center'>
          <button className='bg-slate-700 w-fit p-2 rounded hover:bg-slate-500 active:bg-slate-300 active:text-black'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
