import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <div className="title-container">
        <Link to={title} className="category-title">
          {title.toUpperCase()}
        </Link>
        <Link to={title} className="show-more">
          Show more...
        </Link>
      </div>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
