
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SwiperScreen from './SwiperScreen';
/*import InfoScreen from './InfoScreen';
import DateScreen from './DateScreen';*/
import AddTimetableScreen from './AddTimetableScreen';
import InfoScreen from './InfoScreen';
import fonts from 'res/fonts';

//_ontimepress() {
// this.props.navigation.navigate('timetable')
//}

const AppNavigator = createStackNavigator({
    swiper: {
        screen: SwiperScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    timetable: {
        screen: AddTimetableScreen,
        navigationOptions: {
            title: 'Add new timetable',
        },
        
    }
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
            headerTintColor: "#F1B50E",
            headerTitleStyle: {
                color: "#3E3E40",
                fontFamily: fonts.Regular,
                fontSize: 15
            },
            headerStyle: {
                elevation: 0
            }
    }
});

export default nave();

function nave() {
    return createAppContainer(AppNavigator);
}


