import { useEffect } from "react";

import './sign-in.styles.scss';

import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <div className="form-container">
                <SignInForm/>
                <SignUpForm/>
            </div>
        </div>
    );
}

export default SignIn;