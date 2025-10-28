import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total items: {totalCount}</p>
      <p>Total cost: ₹{totalCost}</p>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width={80} />
          <p>{item.name} - ₹{item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(decrement(item.id))} disabled={item.quantity === 1}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
export default CartPage;