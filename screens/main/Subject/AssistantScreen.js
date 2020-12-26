import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Thumbnail, Root, ActionSheet, Content, Body, Row, Col, Left, Right, Card, CardItem, Button, List, ListItem } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import color from 'res/colors';
import images from 'res/images';
import AssistantPrfileScreen from './AssistantDetailsScreen';
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTAs } from 'library/redux/actions/StatisticActions';
import Spinner from 'library/components/Spinner';

 class AssistantScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onlistpress(id,sections) {
        this.props.navigation.navigate('assistant',{teacher_id:id,sections:sections})
    }

    async componentDidMount(){
        let subject = await this.props.subject
        await this.props.getTAs(subject.joined_ta)
        .then(()=>{
        
        })
        .catch(()=>{
            this.props.isLogging = false
            
        })
        
    }        

    render() {
        // const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const items = []
        if(this.props.statistic.TAs.teachers){
            this.props.statistic.TAs.teachers.map(teacher=> {
                items.push(
                    <ListItem key={teacher._id} avatar button={true}
                        onPress={this._onlistpress.bind(this,teacher._id,this.props.subject.sections.filter(sec=>sec.owner==teacher._id))}
                        style={styles.item}
                    >
                        <Left style={styles.postion} >
                            <Thumbnail small source={images.me} />
                            
                        </Left>
                        <Body>
                        <Text style={styles.text}>{teacher.fullname} </Text>
                       
                        </Body>
                        <Right style={styles.postion}>
                            <Icon name="chevron-right" size={30} style={styles.icon} />
                        </Right>
                    </ListItem >
                )
            })
        }


        return (

            <Container >
                <Spinner isVisible={this.props.isLogging && this.props.error==null?true:false} />

                <Content >
                    <List>
                                {items}
                            </List>
                </Content>
            </Container>

        );
    }
}

const loadingSelector = createLoadingSelector(['GET_AST']);
const errorSelector = createErrorMessageSelector(['GET_AST']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),    
    statistic: state.statistics,
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    getTAs: bindActionCreators(getTAs, dispatch),
  }
}
export default connect(mapStateToProps, mapDisptachToProps)(AssistantScreen);

const styles = StyleSheet.create({

    text: {
        fontFamily: fonts.Regular,
        fontSize: 14,
        paddingBottom: 15,
        paddingTop: 10

    },
    postion: {
        
        alignItems: "center",
        justifyContent: 'center',
    },
    icon: {
        fontFamily: fonts.Bold,
        color: color.supject.main,
        paddingBottom: 0

    },
    item: {
        
        
    },


});
