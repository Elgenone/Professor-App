import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Grid, Row, Text, Body, Right, Content, Button, Header, Left, Icon, Col} from 'native-base';
import { RNToasty } from 'react-native-toasty'
import InfoScreen from './InfoScreen';
import DateScreen from './DateScreen';
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createLecture } from 'library/redux/actions/HomeAction';
import Spinner from 'library/components/Spinner';

const { height: viewportHeight } = Dimensions.get('window');

class SwiperScreen extends Component {
  state = {
       currentIndex: 0
  }

  async componentDidUpdate(){
    if(this.props.navigation.state.params.data){
      
    }
    return {}
}

_press=async()=>{
  if(this.state.currentIndex == 1){
    if(this.props.navigation.state.params){
      if(this.props.navigation.state.params.data && this.props.navigation.state.params.info)
        {
          let data = {
            subj_id : this.props.navigation.state.params.info.subject_id,
            location : this.props.navigation.state.params.info.location,
            time:{
              from : this.props.navigation.state.params.data.from,
              to : this.props.navigation.state.params.data.to,
              day : this.props.navigation.state.params.data.day,
            },
            isLecture : this.props.auth.user.isTA? false : true
          }

          await this.props.createLecture(data)
          .then(()=>{
            this.props.navigation.navigate('home')
          }).catch(()=>{
            alert(this.props.error)
            RNToasty.Error({
              title: this.props.error,
            })
          })
        }
    }
  }else{
    this.swiper.scrollTo(1)
  }
}

  onIndexChanged = (index) => {
       this.setState({currentIndex: index})
  }

  render() {
    const { currentIndex } = this.state;
    return (
     <Container>
           <Spinner isVisible={this.props.isLogging} />
           <Header style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: '#FFFFFF', elevation : 0 }}>
               <Col style={{ justifyContent: 'flex-start' }}>
                    <Row >
                         <Button
                         onPress = {() => {
                              this.props.navigation.pop()
                         }}
                         transparent
                    >
                         <Icon type= 'MaterialCommunityIcons' name="arrow-left" style={{ color: "#F1B50E", fontSize: 27 }} />
                    </Button>
                    </Row>
               </Col>
               <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                         <Row style = {{alignItems: 'center',}}>
                              <View style={[styles.dimDots, currentIndex == 1 ? {backgroundColor: '#D5EEE2'} : null ]} />
                              <View style={[styles.dimDots, currentIndex == 0 ? {backgroundColor: '#D5EEE2'} : null ]} />
                              
                         </Row>
               </Col>
               <Col style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Row >
                         <Button transparent
                         onPress = {this._press}
                         >
                         {
                             currentIndex == 0 ? <Text style={{ color: "#F1B50E", paddingRight: 3 }}>Next/Save</Text> : <Text style={{ color: "#F1B50E" }}>Create</Text>
                         }
                         
                         </Button>
                    </Row>
               </Col>
          </Header>
     
          <Swiper 
               loop={false}
               onIndexChanged = {this.onIndexChanged} 
               showsPagination = {false} 
               ref = {swiper => this.swiper = swiper}
               onIndexChanged = {this.onIndexChanged}
               removeClippedSubviews={false}
               >
                    <DateScreen navigation = {this.props.navigation} />
                         
                    <InfoScreen navigation = {this.props.navigation}  />
                    
               </Swiper>
     </Container>
    );
  }
}

const loadingSelector = createLoadingSelector(['POST_LECTURE']);
const errorSelector = createErrorMessageSelector(['POST_LECTURE']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),
    home: state.home,
    auth : state.auth
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    createLecture: bindActionCreators(createLecture, dispatch)
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(SwiperScreen);

const styles = StyleSheet.create({
     dimDots: {
          backgroundColor:'#FFC107', 
          width: 10, 
          height: 10,
          borderRadius: 5, 
          marginLeft: 3, 
          marginRight: 3, 
          marginTop: 3,
          marginBottom: 3
     }
});