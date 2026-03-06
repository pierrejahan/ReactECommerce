import { useCart } from './CartContext';

const Navbar = ({ setPage }) => {
  const { cart } = useCart();
  
  const linkStyle = { 
    cursor: 'pointer', 
    textDecoration: 'underline', 
    color: 'blue',
    border: 'none',
    background: 'none',
    fontSize: '1rem'
  };

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '1rem', background: '#eee' }}>
      <button style={linkStyle} onClick={() => setPage('home')}>Boutique</button>
      <button style={linkStyle} onClick={() => setPage('cart')}>
        Panier ({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </button>
    </nav>
  );
};

export default Navbar;