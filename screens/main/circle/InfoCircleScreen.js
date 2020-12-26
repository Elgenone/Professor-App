import React, { Component } from 'react';
import { Alert, ImageBackground, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ActionButton from 'react-native-action-button';
import ProgressCircle from 'react-native-progress-circle';
import { View, Container, Grid, Row, Col, Text, Card, CardItem, Header, Content, Button, Title, } from 'native-base';
import fonts from 'res/fonts';
import color from 'res/colors';
import strings from 'res/strings';


export default class InfoCircleScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _oncarditempress() {
        this.props.navigation.navigate('circleDetails')
    }

    render() {

        return (

            <Container >
                <Header transparent style={{ marginTop: 40 }}>
                    <Title style={styles.title}>{strings.circle.info.name}</Title>
                </Header>
                <Content padder>
                    <Grid>
                        <Row>
                            <Col>
                                <Text style={styles.text2}>{strings.circle.info.warn}</Text>
                            </Col>
                        </Row>

                        <Row>
                            <Col style={styles.col} size={1}>
                                <Card style={styles.card}>
                                    <CardItem>
                                        <Text style={styles.text}>{strings.circle.info.card1.header}</Text>
                                    </CardItem>
                                    <CardItem>
                                        <ProgressCircle
                                            percent={30}
                                            radius={50}
                                            borderWidth={7}
                                            color={color.circle.main}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.circle.white}
                                        >
                                            <Text style={styles.text1}>10</Text>
                                            <Text style={styles.text3}>{strings.circle.info.card1.sub}</Text>
                                        </ProgressCircle>

                                    </CardItem>
                                </Card>
                            </Col>

                            <Col style={styles.col} size={1}>
                                <Card style={styles.card}>
                                    <CardItem
                                        button={true}
                                        onPress={this._oncarditempress.bind(this)}
                                    >
                                        <Text style={styles.text}>{strings.circle.info.card2.header}</Text>
                                    </CardItem>
                                    <CardItem
                                        button={true}
                                        onPress={this._oncarditempress.bind(this)}
                                    >
                                        <ProgressCircle
                                            percent={80}
                                            radius={50}
                                            borderWidth={7}
                                            color={color.circle.main}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.circle.white}
                                        >
                                            <Text style={styles.text1}>467</Text>
                                            <Text style={styles.text3}>{strings.circle.info.card2.sub}</Text>
                                        </ProgressCircle>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>

                    </Grid>

                </Content>


                {/* Rest of the app comes ABOVE the action button component !*/}
                <ActionButton
                    bgColor="rgba(86, 88, 85 ,0.7)"
                    renderIcon={() => <Icon name="dots-three-vertical" size={18} style={{ color: color.circle.white, }} />}
                    //icon={<Icon name="dots-three-vertical" size={25} style={{ color: "#F9F7F6", }} />}
                    buttonColor="rgba(231, 180, 12,1)"
                    degrees={90}
                >
                    <ActionButton.Item
                        buttonColor='#0C87E7'
                        title="Stop broadcasting"
                        size={40}
                        spaceBetween={5}
                        textStyle={styles.actiontext}
                        textContainerStyle={styles.action}
                        onPress={() => { }}
                    >
                        <Icon name="controller-stop" size={25} style={{ color: "#D13B17", }} />
                    </ActionButton.Item>

                    <ActionButton.Item
                        buttonColor='#469A1C'
                        title="Expand Time"
                        size={40}
                        spaceBetween={5}
                        textStyle={styles.actiontext}
                        textContainerStyle={styles.action}
                        onPress={() => console.log("notes tapped!")}
                    >

                        <Icon name="plus" size={25} style={{ color: "#F9F7F6", }} />

                    </ActionButton.Item>

                </ActionButton>



            </Container>

        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.Bold,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        color: "#130113",
        fontSize: 21,

    },
    view: {
        borderRadius: 20,
    },
    action: {
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        borderRadius: 20,
        width: "40%",
    },
    actiontext: {
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        fontFamily: fonts.Light,
        fontSize:13,
    },
    card: {
        width: '90%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        shadowColor: "#9BB7EB29",
        shadowOffset: {
            width: 5,
            height: 16,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        
    },

    button: {
        backgroundColor: color.circle.main,
        alignItems: "center",
        justifyContent: 'center',
        width: 100
    },
    text2: {
        fontFamily: fonts.Regular,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        marginBottom:40,
        alignSelf: "center",
        fontSize: 13,
        //marginTop: 15,

    },
    text1: {
        fontFamily: fonts.Regular,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 23,

    },
    text3: {
        fontFamily: fonts.Regular,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 9,
        color: "#3E3E4080",
    },
    text: {
        fontFamily: fonts.Regular,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 11,
    },

    col: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },


});
