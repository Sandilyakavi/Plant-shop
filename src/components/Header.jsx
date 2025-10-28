import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const count = useSelector(state => state.cart.items.reduce((sum, cur) => sum + cur.quantity, 0));
  return (
    <header>
      <Link to="/products">Products</Link> |
      <Link to="/cart">
        <span>🛒 {count}</span>
      </Link>
    </header>
  );
}
export default Header;