// Components/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in:', { username, password });
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-[30%] flex flex-col items-center'>
        <h2 className='text-2xl mb-4 text-center'>Login</h2>
        <div className='mb-4 w-[70%]'>
          <label className='block text-gray-700 mb-2' htmlFor='username'>Username</label>
          <input
            className='border border-gray-300 p-2 w-full'
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <Link to='/home'>
        <button className='bg-blue-500 text-white px-4 py-2  rounded hover:bg-blue-600'>
          Login
        </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
