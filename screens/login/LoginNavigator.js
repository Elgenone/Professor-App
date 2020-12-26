import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import ForgotScreen from './forgot/ForgotScreen';
//import Home from 'prof_app/app/screens/home/HomeScreen';
import fonts from 'res/fonts';


const loginNavigator = createStackNavigator({

    login: {screen: LoginScreen, navigationOptions: { headerShown: false }},
    forgot: {
        screen: ForgotScreen,
        navigationOptions: {
            title: 'Change Password',
            headerTitleAlign: 'center',
            headerTintColor: "#F1B50E",
            headerTitleStyle: {
                color: "#3E3E40",
                fontFamily: fonts.Regular,
                fontSize: 15,
            },
            headerStyle: {
                elevation: 0
            }
        },
    }
 });
 
export default loginNavigator;
 
