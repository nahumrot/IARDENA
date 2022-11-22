import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'
import Footer from './components/footer'
import Contacto from './components/Contacto';
import Politica from './components/Politica';
import { BrowserRouter, Route , Routes } from 'react-router-dom'
// import { CartContext } from './context/Context';
import CartProvider from './context/Context';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element = { <ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element = { <ItemListContainer/>} />
          <Route path='/cart' element = { <Cart/>} />
          <Route path='/detalle/:detalleId' element = { <ItemDetailConteiner/>} />
          <Route path='/contacto' element = { <Contacto/>} />
          <Route path='/politica' element = { <Politica/>} />

        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

