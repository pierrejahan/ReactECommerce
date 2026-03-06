import { useEffect, useState } from 'react';
import { useCart } from './CartContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
          <h3 style={{ fontSize: '0.9rem' }}>{product.title}</h3>
          <p>{product.price} €</p>
          <button onClick={() => addToCart(product)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
}