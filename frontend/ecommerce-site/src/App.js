import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="men"/>} />
        <Route path='/womens' element={<ShopCategory category="women"/>} />
        <Route path='/kids' element={<ShopCategory category="kid"/>} />
        <Route path="/product" element={<Product/>} />
        <Route path=':productId' element={<Product/>} />
        
       </Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
