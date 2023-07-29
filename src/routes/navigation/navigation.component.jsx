import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        const response = await signOutUser();
    }
    
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser? (
                        <span className="nav-link" onClick={signOutHandler}>SIGNOUT <span className="username-container"> {currentUser.displayName}</span> </span>
                    ) : (
                        <Link className="nav-link" to='/sign-in'>
                            SIGN-IN
                        </Link>
                    )
                }
                
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default NavigationBar;