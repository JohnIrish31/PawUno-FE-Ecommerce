import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export async function loginWithFacebook() {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw new Error('User cancelled the login');
    }

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) throw new Error('Something went wrong obtaining access token');

    console.log(data.accessToken); // Send this to your backend
  } catch (error) {
    console.error('Facebook Login Error', error);
  }
}
