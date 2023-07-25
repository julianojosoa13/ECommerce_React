import { useState } from "react"
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

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
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
                    <Button buttonType='google'>Sign In with Google</Button>
                </div>
            </form>

        </div>
    )
}

export default SignInForm;