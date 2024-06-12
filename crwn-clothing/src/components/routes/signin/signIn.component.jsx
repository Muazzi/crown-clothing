import{ signInWithGooglePopUp ,createUserProfileDocument,signWithGoogleRedirect } from '../../../utils/firebase/firebase.utils.js';
import { auth , getRedirectResult} from '../../../utils/firebase/firebase.utils.js';
import { useEffect } from 'react';
const SignIn = () => {
    useEffect(() => {
        async()=>{
            const result = await getRedirectResult(auth);
            console.log(result);
            if(result)
                {
                    const userRef=  await createUserProfileDocument(result.user);
                    console.log(userRef);
                }
        }
    }, [])
    const logWithGoogle = async () => {
        try {
     const {user}  = await signInWithGooglePopUp();
        const userRef=  await createUserProfileDocument(user);
         console.log(userRef);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logWithGoogle}>Sign In With Google</button> 
            <button onClick={signWithGoogleRedirect}>Sign In With Google</button> 

        </div>
    )
}
export default SignIn;