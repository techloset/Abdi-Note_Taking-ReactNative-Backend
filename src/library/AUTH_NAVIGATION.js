import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SCREENS from './SCREENS';

const AUTH_NAVIGATION = [
  {
    screenName: SCREENS.ONBOARDING,
    component: OnBoardingScreen,
  },
  {
    screenName: SCREENS.LOGIN,
    component: LoginScreen,
  },
  {
    screenName: SCREENS.SIGN_UP,
    component: SignUpScreen,
  },
];

export default AUTH_NAVIGATION;
