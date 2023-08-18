import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
    )
}

const removeProductFromCart = (cartItems, productToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
}

export const CartContext = createContext(
    {
        isCartOpen: false,
        cartItems: [],
        setIsCartOpen: () => {},
        addItemToCart: () => {},
        removeItemToCart: () => {},
        removeProduct: () => {},
        cartCount: 0,
        cartTotal: 0,
    }
);

const INITIAL_STATE = {
    cartCount: 0,
    cartTotal: 0,
    isCartOpen: false,
    cartItems: [],
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({children}) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer,INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity  * cartItem.price, 0);
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal}))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const removeProduct = (productToRemove) => {
        const newCartItems = removeProductFromCart(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartOpen = (value) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, value))
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        removeItemToCart, 
        removeProduct, 
        cartCount, 
        cartTotal
    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}