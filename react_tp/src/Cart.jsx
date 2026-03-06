import { useCart } from './CartContext';

export default function Cart() {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Mon Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
              <img src={item.image} alt={item.title} style={{ width: '50px' }} />
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <h4>{item.title}</h4>
                <p>{item.quantity} x {item.price} €</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Supprimer</button>
            </div>
          ))}
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h2>Total : {cartTotal.toFixed(2)} €</h2>
            <button style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
              Commander
            </button>
          </div>
        </div>
      )}
    </div>
  );
}