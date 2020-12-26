import React, { Component } from 'react';
import { View,Image, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Thumbnail, Text, Content, Body, Row, Col, Left, Right, Button, List, ListItem } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import image from 'res/images';


export default class NotificationtScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empty: "r",
        };
    }

    _onlistpress() {

    }


    render() {
        // const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const items = []
        for (let i = 0; i < 8; i++) {
            items.push(
                <ListItem avatar
                    //onPress={this._onlistpress.bind(this)}
                    style={styles.item}
                >
                    <Left style={styles.postion} >
                        <Thumbnail style={{ width: 40, height: 40}} source={image.no} />
                    </Left>
                    <Body style={{borderBottomWidth:0}}>
                        <Text style={styles.text}>[profeseor/studentName] has replied to your [qustion name] qustion</Text>
                        <Text note style={{fontSize: 12, color: '#6C6C6F9B', fontFamily: fonts.Regular}}> 10:00AM</Text>
                    </Body>
                </ListItem >
            )
        }

        const isempty = []
        if (this.state.empty == "") {
            isempty.push(
                <View>
                    <Row style={styles.postion}>
                        <Image source={image.ok} style={{resizeMode: 'cover', marginBottom: 20}}/>

                    </Row>
                    <Row style={styles.postion}>
                        <Text style={styles.text2} >Not yet!</Text>
                    </Row>
                    <Row style={styles.postion}>
                        <Text note style={[styles.text2, {fontSize: 17, fontFamily: fonts.Light}]} >You don't have any notification</Text>
                    </Row>
                </View>
                )
        } else {
            isempty.push(items)
        }


        return (

            <Container >
                <Content padder>
                    <Row>
                        <Col>
                            <List>
                                {isempty}
                            </List>
                        </Col>
                    </Row>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({

    text: {
        fontFamily: fonts.Light,
        marginBottom: 10,
        color: '#3E3E40',
        fontSize: 13
        

    },
    text2: {
        fontFamily: fonts.Bold,
        marginBottom: 10,
        color: '#3E3E40',
        fontSize: 25
        

    },
    postion: {
        textAlign: "center",
        justifyContent: 'center',
    },
    item: {
        borderBottomColor: "#E7E5E7",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginLeft: 0
    },


});
