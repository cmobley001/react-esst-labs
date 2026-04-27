import heroBg from './img/anime_city-wallpaper-2560x1600.jpg';

const Header = ({ title }) => {
  return (
    <header
      className="relative w-full h-[40vh] flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold text-white tracking-tight drop-shadow-lg">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
