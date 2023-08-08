import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

import  FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import {SignUpContainer, Subtitle} from './sign-up-form.styles.jsx';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Your passwords do not match!");
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user)

            if (user) {
                const userDocRef = createUserDocumentFromAuth(user,{ displayName });
                resetFormFields();
            }

        } catch(error) {
            if (error.code === "auth/email-already-in-user") {
                alert("Cannot create user, email already in use!");
            }
            console.log("User creation encountered an error: ", error);
        }
    }

    return (
        <SignUpContainer>
            <Subtitle>Don't have an account?</Subtitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" onChange={handleChange} name="displayName" value={displayName} required />

                <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required />

                <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required />

                <FormInput label='Confirm Password' type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm