import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Categories from './components/Categories';
import Renderbooks from './components/Render';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Renderbooks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
