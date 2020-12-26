import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import { Container, Tab, Tabs} from 'native-base';
import fonts from 'res/fonts';
import R from 'res/R';

import StatisticScreen from './StatisticScreen';
import AssistantScreen from './AssistantScreen';
import ProjectScreen from './ProjectScreen';



export default class SubjectScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    async componentDidMount(){
    }



    render() {

        // if(this.props.navigation.state.params.subject){
        //     return (
                

        //     );
        // }
        return (
            <Container> 
                <Tabs tabBarUnderlineStyle={styles.line} >
                    <Tab  heading={R.strings.supject.taps.tap1} tabStyle = {styles.tabStyle} textStyle={styles.tabTextStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.tabActiveTextStyle}>
                        <StatisticScreen subject={this.props.navigation.state.params.subject}/>
                    </Tab >
                    <Tab heading={R.strings.supject.taps.tap2} tabStyle = {styles.tabStyle} textStyle={styles.tabTextStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.tabActiveTextStyle}>
                        <AssistantScreen subject={this.props.navigation.state.params.subject} navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading={R.strings.supject.taps.tap3} tabStyle={{backgroundColor: color.supject.main}} tabStyle = {styles.tabStyle} textStyle={styles.tabTextStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.tabActiveTextStyle}>
                        <ProjectScreen project={this.props.navigation.state.params.subject.project[0]} />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    line:{
        backgroundColor: R.colors.main,
        height: 2
    },
    tabStyle: {
     backgroundColor: '#fff'
    },
    activeTabStyle: {
     backgroundColor: '#fff',
     opacity: 1
    },
    tabTextStyle: {
     color: R.colors.main,
     fontFamily: fonts.Regular,
     opacity: 0.5,
     fontSize: 14
    },
    tabActiveTextStyle: {
     color: R.colors.main, 
     fontFamily: fonts.Regular,
     fontSize: 14
    }

});
