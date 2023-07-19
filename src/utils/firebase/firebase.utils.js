import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyDQRM_kyzxEnq7QKtaUqm5KIZF3onNaI_s",
  
    authDomain: "crwn-clothing-db-1b0ee.firebaseapp.com",
  
    projectId: "crwn-clothing-db-1b0ee",
    
    storageBucket: "crwn-clothing-db-1b0ee.appspot.com",
    
    messagingSenderId: "343770157825",
    
    appId: "1:343770157825:web:3f338aa3f315404431c100"
    
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  