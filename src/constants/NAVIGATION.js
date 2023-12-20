import BottomTabNavigator from '../navigation/BottomTabNavigator';
import BuyingSomeThing from '../screens/BuyingSomeThing';
import CreateNewNotes from '../screens/CreateNewNotes';
import EditProfile from '../screens/EditProfile';
import FinishedScreen from '../screens/FinishedScreen';
import Goals from '../screens/Goals';
import Guidence from '../screens/Guidance';
import HomeScreen from '../screens/HomeScreen';
import InterestingIdea from '../screens/InterestingIdea';
import LoadingScreen from '../screens/LoadingScreen';
import RoutineTasks from '../screens/RoutineTasks';
import SearchScreen from '../screens/SearchScreen';
import Settings from '../screens/Settings';
import ForgotPassword from '../screens/auth/ForgotPassword';
import SCREENS from './SCREENS';

const NAVIGATION = [
  {
    screenName: SCREENS.BOTTOM_NAVIGATOR,
    component: BottomTabNavigator,
  },
  {
    screenName: SCREENS.HOME,
    component: HomeScreen,
  },
  {
    screenName: SCREENS.FINISHED,
    component: FinishedScreen,
  },
  {
    screenName: SCREENS.CREATE_NEW_NOTES,
    component: CreateNewNotes,
  },
  {
    screenName: SCREENS.SEARCH,
    component: SearchScreen,
  },
  {
    screenName: SCREENS.SETTING,
    component: Settings,
  },
  {
    screenName: SCREENS.EDIT_PROFILE,
    component: EditProfile,
  },
  {
    screenName: SCREENS.GOALS,
    component: Goals,
  },
  {
    screenName: SCREENS.GUIDENCE,
    component: Guidence,
  },
  {
    screenName: SCREENS.INTRESTING_IDEA,
    component: InterestingIdea,
  },
  {
    screenName: SCREENS.LOADING_SCREEN,
    component: LoadingScreen,
  },
  {
    screenName: SCREENS.ROUTINE_TASKS,
    component: RoutineTasks,
  },
  {
    screenName: SCREENS.BUY_SOMETHING,
    component: BuyingSomeThing,
  },
  {
    screenName: SCREENS.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
];

export default NAVIGATION;
