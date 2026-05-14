import heroBg from './img/anime_city-wallpaper-1920.jpg';
import Button from './Button.jsx';

const Header = ({ title = 'Welcome' }) => {
  return (
    <header
      aria-label="Hero banner with anime city background"
      className='relative w-full h-[60vh] flex items-center justify-center bg-top bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10 text-center px-4'>
        <h1 className='text-5xl font-bold text-white tracking-tight drop-shadow-lg'>
          {title}
        </h1>
        <a href='#' className='inline-block mt-4'>
          <Button variant="primary" size="md">Learn More</Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
