import { useState, useContext } from "react";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {email, password} = formFields;

    const { setCurrentuser } = useContext(UserContext);

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log({user});
            setCurrentuser({user});
            resetFields();
        } catch(error) {
           switch(error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password for email!");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email!");
                    break;
                default:
                    console.log(error);
           }
        }


    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const logGoogleuser = async () => {
        try {
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth({user});
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign-in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' name='email' value={email} onChange={handleChange} required/>

                <FormInput label='Password' type='password' name='password' value={password} onChange={handleChange} required/>
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType='google' type='button' onClick={logGoogleuser}>Google Sign In</Button>
                </div>
            </form>

        </div>
    )
}

export default SignInForm;