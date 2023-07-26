import { useState } from "react";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

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

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
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