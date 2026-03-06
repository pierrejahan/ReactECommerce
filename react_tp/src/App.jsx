import { useState } from 'react';
import { CartProvider } from './CartContext';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';

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