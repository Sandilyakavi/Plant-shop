import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1>GreenLeaf Nursery</h1>
      <p>Welcome to GreenLeaf! Your home for beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}