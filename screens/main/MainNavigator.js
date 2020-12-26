
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import fonts from 'res/fonts';

import ProfileScreen from './profile/ProfileScreen';
import editeProfile from './profile/EditeProfileScreen';
import changepassword from './profile/ChangePasswordScreen';
import NotificationScreen from './home/NotificationScreen';
import onboardingNavigator from '../onboarding/onboardingNavigator';
import LoginNavigator from '../login/LoginNavigator';
import Home from './home/HomeScreen';
import InvitationScreen from './home/InvitationScreen';
import LectureSectionStack from './ls/LSNavigation';
import DateScreen from './ls/DateScreen';
import SubjectScreen from './Subject/SubjectScreen';
import AssistantDetailsScreen from './Subject/AssistantDetailsScreen';
import MenuScreen from './menu/MenuScreen';
import CircleScreen from './circle/CircleScreen';
import CircleDetailsScreen from './circle/EnrolledStudentScreen';
import AddCircle from './circle/AddNewCircleScreen';
import InfoCircleScreen from './circle/InfoCircleScreen';


const HomeStack = createStackNavigator({

    home: 
    {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: '',
            headerStyle: {
                backgroundColor: '#F6F6F6',
                elevation: 0,
                
                
            },
            headerRight: ()=>
            <Button
                onPress={() => navigation.navigate("notification")}
                transparent
            >
                <Icon name="bell" size={25} style={{ color: "#FFC107", opacity: 0.6 , marginRight:10}} />
            </Button>,

            headerLeft: ()=>
                <Button transparent
                   onPress={() => navigation.openDrawer()}
                >
                     <Icon name="menu" size={25} style={{ color: "#FFC107", marginLeft:10 }} />
                </Button>,
           

        })
    },
    // add only a screen if you want the drawer inside

});

const Drawer = createDrawerNavigator({
    menu: HomeStack,
},
{
    drawerPosition: 'left',
    contentComponent: (props) => <MenuScreen {...props} />
},
)

const AppStack = createStackNavigator({
    drawer: {screen : Drawer, navigationOptions: {headerShown: false}},
    subject: {
        screen: SubjectScreen,
        navigationOptions: {
            title: '[Subject Name]',
            headerRight: () => 
                <Button
                    //onPress={}
                    transparent
                >
                    <Icon name="trash" size={20} style={{ color: '#FFC107', marginRight:20 }} />
                </Button>,
        }
    },
    assistant: {
        screen: AssistantDetailsScreen,
        navigationOptions: {
            title: '[Assistant Name]'
        }
    },

    profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profile'
        }
    },
    editeProfile: {
        screen: editeProfile,
        navigationOptions: {
            title: 'Edite Profile'
        }
    },
    changepassword: {
        screen: changepassword,
        navigationOptions: {
            title: 'Change Password'
        }
    },
    notification: {
        screen: NotificationScreen,
        navigationOptions: {
            title: 'Notifications'
        }
    },
    ls: {
        screen: LectureSectionStack,
        navigationOptions: {
            headerShown: false
        },
    },
    date: {
        screen: DateScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    circle: {
        screen: CircleScreen,
        navigationOptions: {
            title: 'Circles'
        }
    },
    circleDetails: {
        screen: CircleDetailsScreen,
        navigationOptions: {
            title: '[Circle Name]'
        }
    },
    infoCircle: {
        screen: InfoCircleScreen,
        navigationOptions: {
            title: 'Add New Circle',
            headerShown: false
        },
    },
    addCircle: {
        screen: AddCircle,
        navigationOptions: {
            title: 'Add New Circle'
        }
    },
    invitation: {
        screen: InvitationScreen,
        navigationOptions: {
            headerShown: false,
            mode: 'modal'
        }
    }
},{

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
    },
    
})


const Switcher = createSwitchNavigator({
    main: AppStack,
    onboard: onboardingNavigator,
    login: LoginNavigator,
    
    
    
})

export default createAppContainer(Switcher);