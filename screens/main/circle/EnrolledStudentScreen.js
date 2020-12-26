import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Thumbnail, Root, ActionSheet, Content, Body, Row, Col, Left, Right, Card, CardItem, Button, List, ListItem } from 'native-base';
import fonts from 'res/fonts';
import color from 'res/colors';
import strings from 'res/strings';
import images from 'res/images';
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import Spinner from 'library/components/Spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStudents } from 'library/redux/actions/HomeAction';

class EnrolledStudentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onlistpress() {
       // this.props.navigation.navigate('assistantPrfile')
      }

      async componentDidMount(){

          this.props.getStudents(this.props.navigation.state.params.students)
          .then(()=>{
          })
          .catch(()=>{
              alert(this.props.error.error)
          })
      }

    render() {
       // const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const items = []
        if(this.props.home.students.length>0){
            this.props.home.students.map(student=>{
                items.push(
                    <Button // button={true}
                    transparent
                    onPress={this._onlistpress.bind(this)}
                    style={styles.item}
                    >
                        
                        <Left style={{marginLeft:11}}>
                        <Text style={styles.text}>{student.fullname}</Text>
                        <Text style={styles.text2}>{student.st_id}</Text>
                        </Left>
                        <Right >
                        <Icon name="trash" style={styles.icon} />
                        </Right>
                    </Button >
                )
            })
        }
        

        return (

            <Container >
                <Spinner isVisible={this.props.isLogging} />

                <Content>
                    <Row>
                        <Col>
                            <List>
                               {items}
                            </List>
                        </Col>
                    </Row>
                </Content>
            </Container>

        );
    }
}

const loadingSelector = createLoadingSelector(['GET_STUDENT']);
const errorSelector = createErrorMessageSelector(['GET_STUDENT']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),
    home: state.home,
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    getStudents: bindActionCreators(getStudents, dispatch)
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(EnrolledStudentScreen);


const styles = StyleSheet.create({

    text: {
        fontFamily: fonts.Regular,
        fontSize: 14,
    },
    text2: {
        fontFamily: fonts.Regular,
        fontSize: 11,
    },
    postion:{
        textAlign: "left",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    icon:{
        fontFamily: fonts.Bold,
        fontSize: 24,
        color: color.circle.secandmain,
    },
    item:{
        borderBottomColor: "#CECCC6",
        borderBottomWidth: 1,
        paddingBottom:10
    },


});
