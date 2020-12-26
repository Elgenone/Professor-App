import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import Board1Screen from './board1/Board1Screen';
import Board2Screen from './board2/Board2Screen';
import Board3Screen from './board3/Board3Screen';


export default class onboardingNavigator extends Component {
  state = {
       showDots: true
  }

  onIndexChanged = (index) => {
       if(index == 2)
          this.setState({showDots: false})
       else
          this.setState({showDots: true})
  }
  render() {
    return (
     <Swiper loop={false} onIndexChanged = {this.onIndexChanged} 
     showsPagination = {this.state.showDots} 
     dotColor = "#D6EEE2" 
     activeDotColor="#7B1FA2" 
     dotStyle = {styles.dots} 
     activeDotStyle = {
          styles.dots
     } >
          <Board1Screen navigation = { this.props.navigation } />

          <Board2Screen navigation = { this.props.navigation } />

          <Board3Screen navigation = { this.props.navigation } />
          
     </Swiper>
    );
  }
}

const styles = StyleSheet.create({
     dots: {
          width: 14, 
          height: 14, 
          borderRadius: 14,
          top: 10
     }
});