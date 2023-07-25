import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, SetFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        SetFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("Your passwords do not match!");
            return
        }
        console.log("submitting!\nemail: ", email, " password: ", password)
        try {
            var {user} = await createAuthUserWithEmailAndPassword(email, password);

            if (user) {
                console.log(user);
                user.displayName = displayName;
                const userDocRef = createUserDocumentFromAuth(user);
            }

        } catch(error) {
            console.log("User creation encountered an error: ", error);
        }
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" onChange={handleChange} name="displayName" value={displayName} required />

                <label>Email</label>
                <input type="email" onChange={handleChange} name="email" value={email} required />

                <label>Password</label>
                <input type="password" onChange={handleChange} name="password" value={password} required />

                <label>Confirm Password</label>
                <input type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm