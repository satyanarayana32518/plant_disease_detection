import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <div>
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'home' ? <Home /> : <About />}
    </div>
  );
}

export default App;
