import { useState } from 'react';
import { CartProvider } from './react_tp/src/CartContext';
import Navbar from './react_tp/src/Navbar';
import Home from './react_tp/src/Home';
import Cart from './react_tp/src/Cart';

function App() {
  const [page, setPage] = useState('home');

  return (
    <CartProvider>
      <Navbar setPage={setPage} />
      <main style={{ padding: '20px' }}>
        {page === 'home' ? <Home /> : <Cart />}
      </main>
    </CartProvider>
  );
}

export default App;