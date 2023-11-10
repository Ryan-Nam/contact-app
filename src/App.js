import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <>
      <Navbar />
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
