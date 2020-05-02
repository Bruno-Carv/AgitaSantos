import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingPage from './pages/loading';
import SignInPage from './pages/signin';
import HomePage from './pages/home';

const HomeStack = createStackNavigator({
    Home:{
        screen: HomePage
    }
});

const LoginStack = createStackNavigator({
    Login:{
        screen: SignInPage
    }
},{
    headerMode: 'none'
});

const AppSwith = createSwitchNavigator({
    LoadingPage,
    LoginStack,
    HomeStack
});

const AppRouter = createAppContainer(AppSwith);

export default AppRouter;