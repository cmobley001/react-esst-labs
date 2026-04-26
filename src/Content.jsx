const Content = () => {
  const items = [
    { id: 1, name: 'Box of Rain', category: 'Nature' },
    { id: 2, name: 'Cloudy Skies', category: 'Weather' },
    { id: 3, name: 'Rainbow Sherbert', category: 'Food' },
  ];
  return (
    <main className='max-w-xl mx-auto px-4 py-6 text-gray-300'>
      <h2 className='text-xl font-medium text-white mb-2'>
        Welcome to my website.
      </h2>
      <p className='mb-4'>This is the content of my website.</p>
      <hr className='border-zinc-700 my-4' />
      <ul className='list-none space-y-1'>
        {items.map(({ id, name, category }) => (
          <li key={id} className="before:content-['✓'] before:text-green-400 before:mr-2">
            {name} ({category})
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
