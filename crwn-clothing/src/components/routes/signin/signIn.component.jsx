import{ signInWithGooglePopUp ,createUserProfileDocument} from '../../../utils/firebase/firebase.utils.js';

const SignIn = () => {
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
        </div>
    )
}
export default SignIn;