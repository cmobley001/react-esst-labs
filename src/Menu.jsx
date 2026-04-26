const Menu = () => {
  return (
    <nav className='bg-zinc-800 p-4'>
      <div className='mx-auto flex max-w-5xl items-center'>
        <a href='/' className='text-lg font-semibold text-zinc-100'>
          My Website
        </a>
        <ul className='ml-auto flex space-x-4 text-zinc-100'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
