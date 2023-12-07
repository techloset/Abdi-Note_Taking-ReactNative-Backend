import SCREENS from './SCREENS';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import ProfileScreen from '../screens/ProfileScreen';
// icons
import HomeScreenIcon from '../assets/images/icons/home.svg';
import BrowseScreenIcon from '../assets/images/icons/browse.svg';
import AddTodoScreenIcon from '../assets/images/icons/order.svg';
import ProfileScreenIcon from '../assets/images/icons/profile.svg';

const BOTTOM_NAVIGATION = [
  {
    screenName: SCREENS.HOME,
    component: HomeScreen,
    icon: HomeScreenIcon,
  },
  {
    screenName: SCREENS.BROWSE,
    component: BrowseScreen,
    icon: BrowseScreenIcon,
  },
  {
    screenName: SCREENS.ADD_TODO,
    component: AddTodoScreen,
    icon: AddTodoScreenIcon,
  },
  {
    screenName: SCREENS.PROFILE,
    component: ProfileScreen,
    icon: ProfileScreenIcon,
  },
];

export default BOTTOM_NAVIGATION;
