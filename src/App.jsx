import Header from './Header.jsx';
import Content from './Content.jsx';
import Menu from './Menu.jsx';
function App() {
  return (
    <div className='bg-zinc-900 min-h-screen'>
      <Menu />
      <Header title='My Website' />
      <Content />
    </div>
  );
}

export default App;
