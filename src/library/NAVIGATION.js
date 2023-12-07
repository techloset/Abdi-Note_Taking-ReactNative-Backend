import BottomNavigator from '../navigation/BottomNavigator';
import AddAddressScreen from '../screens/AddAddressScreen';
import AddCardScreen from '../screens/AddCardScreen';
import AddProductScreen from '../screens/AddProductScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import CheckoutSuccessScreen from '../screens/CheckoutSuccessScreen';
import CreateStoreScreen from '../screens/CreateStoreScreen';
import MyStoreScreen from '../screens/MyStoreScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import PaymentOptionFinalScreen from '../screens/PaymentOptionFinalScreen';
import PaymentOptionScreen from '../screens/PaymentOptionScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import StoreProfileScreen from '../screens/StoreProfileScreen';
import WishlistScreen from '../screens/WishlistScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SCREENS from './SCREENS';

const NAVIGATION = [
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
  {
    screenName: SCREENS.PRODUCTS,
    component: ProductsScreen,
  },
  {
    screenName: SCREENS.PRODUCT_DETAIL,
    component: ProductDetailScreen,
  },
  {
    screenName: SCREENS.WISHLIST,
    component: WishlistScreen,
  },
  {
    screenName: SCREENS.CART,
    component: CartScreen,
  },
  {
    screenName: SCREENS.ADD_ADDRESS,
    component: AddAddressScreen,
  },
  {
    screenName: SCREENS.CHECKOUT,
    component: CheckoutScreen,
  },
  {
    screenName: SCREENS.PAYMENT,
    component: PaymentOptionScreen,
  },
  {
    screenName: SCREENS.ADD_CARD,
    component: AddCardScreen,
  },
  {
    screenName: SCREENS.PAYMENT_FINAL,
    component: PaymentOptionFinalScreen,
  },
  {
    screenName: SCREENS.CHECKOUT_SUCCESS,
    component: CheckoutSuccessScreen,
  },
  {
    screenName: SCREENS.CREATE_STORE,
    component: CreateStoreScreen,
  },
  {
    screenName: SCREENS.MY_STORE,
    component: MyStoreScreen,
  },
  {
    screenName: SCREENS.ADD_PRODUCT,
    component: AddProductScreen,
  },
  {
    screenName: SCREENS.STORE_PROFILE,
    component: StoreProfileScreen,
  },
  {
    screenName: SCREENS.BOTTOM_NAVIGATOR,
    component: BottomNavigator,
  },
];

export default NAVIGATION;
