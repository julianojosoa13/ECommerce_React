import "./product-card.styles.scss";

import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
