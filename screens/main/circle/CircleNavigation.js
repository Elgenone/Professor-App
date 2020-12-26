
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import color from 'res/colors';

import AddNewCircleScreen from './AddNewCircleScreen';
import InfoCircleScreen from './InfoCircleScreen';


const AppNavigator = createStackNavigator({
    addNewCircle: {
        screen: AddNewCircleScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    infoCircle: {
        screen: InfoCircleScreen,
        navigationOptions: {
            title: '[Circle Name]',
            headerShown:false,
        },
    }
   

},
    {

        defaultNavigationOptions: {

            headerTitleAlign: 'center',
            headerTintColor: color.circle.secandmain,
            headerTitleStyle: {
                fontWeight: 'bold',
                color: "#2E2C15",

            },
        },
    }

);

export default nave();

function nave() {
    return createAppContainer(AppNavigator);
}