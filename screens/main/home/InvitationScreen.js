import React, { Component } from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Thumbnail, Text, Content, Body, Row, Col, Left, Right, Button, List, ListItem } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import image from 'res/images';
import color from 'res/colors';


export default class InvitationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onDecline() {
        this.props.navigation.goBack()
    }
    _onAccept() {
        this.props.navigation.goBack()
    }

    render() {
        return (

            <Container >
                <Content >
                    <Row style={styles.postion}>
                        <Image source={image.invitation} style={{ resizeMode: 'cover' }} />
                    </Row>
                    <Row style={styles.postion}>
                        
                        <Col style = {{alignItems: 'center', paddingLeft: 10, paddingRight: 10}}>
                            <Text style={styles.text1}>{strings.invetation.header}</Text>
                            <Text style={styles.text2}>{strings.invetation.body}</Text>
                        </Col>
                    </Row>
                    
                    <Row style={styles.postion}>
                        <Col>
                        <Button 
                        small 
                        transparent
                        onPress={this._onDecline.bind(this)}
                        >
                        <Text style={styles.button1}>{strings.invetation.button1}</Text>
                        </Button>
                        </Col>
                        <Col>
                        <Button  
                        rounded 
                        style={styles.button2}
                        onPress={this._onAccept.bind(this)}
                        >
                        <Text style={styles.text3}>{strings.invetation.button2}</Text>
                        </Button>
                        </Col>
                    </Row>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    postion: {
        textAlign: "center",
        justifyContent: 'center',
        alignItems:"center",
    },
    text1: {
        fontFamily: fonts.Bold,
        marginBottom: 10,
        color: color.invetation.text,
        fontSize: 25 , 
        marginTop:50,
    },
    text2: {
        fontFamily: fonts.Light,
        marginBottom: 50,
        color: color.invetation.text,
        fontSize: 17,
        textAlign: "center",
        
    },
    button1: {
        textAlign: "center",
        justifyContent: 'center',
        alignItems:"center",
        color:color.invetation.button,
        fontSize: 14,
        marginLeft:50,
        fontFamily: fonts.Regular,
    },
    text3: {
        fontFamily: fonts.Regular,
        textAlign: "center",
        justifyContent: 'center',
        alignItems:"center",
        color:color.invetation.white,  
        fontSize: 14,
        
    },
    button2:{
        textAlign: "center",
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:color.invetation.button,
        marginRight:50,
    },
})