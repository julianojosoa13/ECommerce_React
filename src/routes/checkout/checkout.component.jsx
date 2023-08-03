import './checkout.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);

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
                                    <span>{quantity}</span>
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