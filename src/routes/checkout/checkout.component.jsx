import './checkout.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutPage = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

    return (
        <div>
            <h1>I am the checkout page</h1>
            <div>
                {
                    cartItems.map((item) => {
                            const {id, name, quantity} = item;
                            return (
                                <div key={id}> 
                                    <h2>{name}</h2>
                                    <div onClick={() => removeItemToCart(item)}>-</div>
                                    <span>{quantity}</span>
                                    <div onClick={() => addItemToCart(item)}>+</div>
                                </div>
                            )       
                        }
                    )

                }
            </div>
        </div>
    )
}

export default CheckoutPage;