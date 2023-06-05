import { Link } from 'react-router-dom';
import products from '../data/products';

export const Product = () => {
  return (
    <div className='PageStyleApp'>
      <h1>Product page</h1>
      <div>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
