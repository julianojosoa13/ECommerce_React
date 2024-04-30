import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";

import { LogoContainer, NavigationContainer, UsernameContainer, NavLinks, NavLink } from "./navigation.styles.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";

const NavigationBar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const { isCartOpen } = useContext(CartContext)

    const signOutHandler = async () => {
        const response = await signOutUser();
    }
    
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo className="logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser? (
                        <NavLink as="span" onClick={signOutHandler}>SIGN OUT<UsernameContainer>{currentUser.displayName}</UsernameContainer> </NavLink>
                    ) : (
                        <NavLink to='/sign-in'>
                            SIGN-IN
                        </NavLink>
                    )
                }

                <CartIcon />                
            </NavLinks>
            { isCartOpen && <CartDropdown /> }
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  }

  export default NavigationBar;