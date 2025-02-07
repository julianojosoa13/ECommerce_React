import { useDispatch, useSelector } from "react-redux";
import "./checkout-item.styles.scss";
import {
  addItemToCart,
  removeItemToCart,
  removeProduct,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = item;

  const cartItems = useSelector(selectCartItems);

  // const  {removeProduct, removeItemToCart, addItemToCart} = useContext(CartContext)

  const deleteProduct = () => {
    dispatch(removeProduct(cartItems, item));
  };

  const addItem = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  const removeItem = () => {
    dispatch(removeItemToCart(cartItems, item));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteProduct}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
