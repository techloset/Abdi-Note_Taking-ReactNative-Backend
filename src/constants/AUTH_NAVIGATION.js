import OnboardingScreen from '../screens/OnboardingScreen';
import ChangePassword from '../screens/auth/ChangePassword';
import CreateNewPassword from '../screens/auth/CreateNewPassword';
import EmailCode from '../screens/auth/EmailCode';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import SCREENS from './SCREENS';

const AUTH_NAVIGATION = [
  {
    screenName: SCREENS.ONBOARDING,
    component: OnboardingScreen,
  },
  {
    screenName: SCREENS.LOGIN,
    component: Login,
  },
  {
    screenName: SCREENS.REGISTER,
    component: Register,
  },
  {
    screenName: SCREENS.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
  {
    screenName: SCREENS.EMAIL_CODE,
    component: EmailCode,
  },
  {
    screenName: SCREENS.CREATE_NEW_PASSWORD,
    component: CreateNewPassword,
  },
  {
    screenName: SCREENS.CHANGE_PASSWORD,
    component: ChangePassword,
  },
];

export default AUTH_NAVIGATION;
