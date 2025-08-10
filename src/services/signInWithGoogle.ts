
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    // userInfo has user info like:
    // userInfo.user.givenName (first name)
    // userInfo.user.familyName (last name)
    // userInfo.user.email
    // userInfo.idToken  (send this to backend if verifying token server-side)

    return userInfo // return user profile
  } catch (error) {
    throw error;
  }
}
