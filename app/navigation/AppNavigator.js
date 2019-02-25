import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Login from '../components/login/login';
import numberEntry from '../components/signUp/enterMobileNumber'
import SignupForm from '../components/signUp/SignupForm';
import Home from '../home/home'
import calendars from '../components/calendar/calendar';
import Help from '../components/help/help';
import Profile from '../components/profile/profile';
import Settings from '../components/settings/settings';
import LastClasses from '../components/lastClasses/lastClasses';
import SideMenu from './sideMenu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderBar from '../components/common/headerBar';


const MainDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile,
    },

    Help: {
      screen: Help,
    },
    
    Account: {
      screen: Home,
    },
    Notification: {
      screen: Home,
    },
    "Last Classes": {
      screen: LastClasses,
    },
    Calendar: {
      screen: calendars,
    },
    Settings: {
      screen: Settings,
    },
    Help: {
      screen: Help,
      title: 'Help'
    },
    Logout: {
      screen: Login,
    },
    header: {
      screen: HeaderBar,
    }
  },     {
    contentComponent: SideMenu,
    drawerWidth: wp('69%'),
  }
)

const LoginStack = createStackNavigator(
  {
    Login: Login,
    SendOTPScreen: {
      screen: numberEntry,
      navigationOptions : {
        title: 'Phone validation',
      }
    },
    SignupDetails: {
      screen: SignupForm,
      navigationOptions : {
        title: 'Enter your details',
      }
    },
  }
);


const AppNavigator = createSwitchNavigator(
  {
    BeforeLogin: {
      screen: LoginStack
    },
    
    Home: { 
      screen: MainDrawer,
    }
  }
);

export default AppNavigator;