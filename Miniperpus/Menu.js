

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './login';
import Main from './Main';
import SignIn from './signIn'
import Home from './home';


const AppNavigator = createStackNavigator(
{
    Utama: Main,
    Layar1: Login,
    Layar2: SignIn,
    Layar3: Home,
 
  },

    {initialRouteName: "Utama"}
);
export default createAppContainer(AppNavigator);



