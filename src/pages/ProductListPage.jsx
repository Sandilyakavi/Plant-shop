import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { plants } from '../data/plants';
import { Link } from 'react-router-dom';

function ProductListPage() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const categories = ["Indoor", "Succulent", "Outdoor"];

  return (
    <div>
      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="plants-row">
            {plants.filter(plant => plant.category === cat).map(plant => (
              <div key={plant.id}>
                <img src={snake.jpeg} alt={plant.name} width={100} />
                <p>{plant.name} - ₹{plant.price}</p>
                <button
                  disabled={cart.some(item => item.id === plant.id)}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {cart.some(item => item.id === plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
}
export default ProductListPage;