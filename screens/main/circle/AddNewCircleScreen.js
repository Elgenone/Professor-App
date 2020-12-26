import React, { Component } from 'react';
import { View, Alert, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Container, Form, Footer, FooterTab, Content, Text, Item, Row, Label, Button, Input } from 'native-base';
import fonts from 'res/fonts';
import color from 'res/colors';
import strings from 'res/strings';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(25);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;



export default class AddNewCircleScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            focusedInput: null,
            slider1ActiveSlide: 5,
        };
        this.init();
    }

    init() {
        this.state = {
            times: [
                { title: "5 Mins" },
                { title: "10 Mins" },
                { title: "15 Mins" },
                { title: "20 Mins" },
                { title: "25 Mins" },
                { title: "30 Mins" },
                { title: "35 Mins" },
                { title: "40 Mins" },
                { title: "45 Mins" },
                { title: "50 Mins" },
                { title: "55 Mins" },
                { title: "60 Mins" },
                { title: "65 Mins" },
                { title: "70 Mins" },
                { title: "80 Mins" },
                { title: "85 Mins" },
                { title: "90 Mins" },
                { title: "95 Mins" },
                { title: "100 Mins" },
                { title: "105 Mins" },
                { title: "110 Mins" },
                { title: "115 Mins" },
                { title: "120 Mins" },

            ],
        }
    }

    _onnextpress() {
        this.props.navigation.navigate('infoCircle')
    }


    onFocusChange = (inputName) => {
        this.setState({ focusedInput: inputName });
    }

    onBlurChange = (inputName) => {
        const { focusedInput } = this.state
        if (focusedInput === inputName) {
            this.setState({
                focusedInput: null
            })
        }

    }

    _renderItem2 = ({ item, index }) => {
        return (
            <View style={styles.slide2}>
                <Text style={styles.title2}>{item.title}</Text>
            </View>

        );
    }


    render() {



        return (

            <Container >
                <Content padder>
                    <Form>
                        <Label style={styles.label}>{strings.circle.addnew.label}</Label>
                        <Item regular style={styles.item}>
                            <Input
                                onFocus={() => this.onFocusChange("input1")}
                                onBlur={() => this.onBlurChange("input1")}
                                style={(this.state.focusedInput === "input1") ? styles.inputalt : {opacity:0.3}}
                                onChangeText={text => this.setState({ name: text })}
                                value={this.state.name}
                            />
                        </Item >

                    </Form>

                    <Row style={{ textAlign: "center", alignItems: "center", justifyContent: 'center',marginBottom:10 }}>
                        <Text style={styles.text}>{strings.circle.addnew.timer}</Text>
                    </Row>
                    <Row>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.times}
                            renderItem={this._renderItem2}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            layout={'default'}
                            firstItem={8}
                            inactiveSlideOpacity={0.3}
                            containerCustomStyle={{ width: "100%" }}
                        />

                    </Row>
                    <Row>
                        <Text style={styles.text2}>{strings.circle.addnew.warn}</Text>
                    </Row>
                    
                </Content>

                <Footer style={styles.footer}>
                    <FooterTab style={styles.footer}>
                        <Button
                            block
                            transparent
                            style={styles.button}
                            onPress={this._onnextpress.bind(this)}
                        >
                            <Text style={styles.text1}>{strings.circle.addnew.button}</Text>
                        </Button>

                    </FooterTab>
                </Footer>
            </Container>

        );
    }
}

const styles = StyleSheet.create({

    title2: {
        fontFamily: fonts.Regular,
        fontSize: 20,
        color: color.circle.main,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
    },

    button: {
        alignItems: "center",
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: "#E1DAE1",

    },
    text: {
        fontFamily: fonts.Regular,
        textAlign: "center",
        alignItems: "center",
        fontSize:13,
        justifyContent: 'center',
        margin: 18
    },
    text1: {
        fontFamily: fonts.Regular,
        color: color.circle.main,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
        fontSize:14,

    },
    text2: {
        fontFamily: fonts.Regular,
        marginBottom: 10,
        marginRight:130,
        opacity:0.5,
        fontSize:9,
        marginTop:14,

    },
    label: {
        fontFamily: fonts.Regular,
        fontSize:12,
        color:"#909090",
        marginTop:40,
        marginBottom: 10,
    },
    item: {
        marginBottom: 10
    },
    inputalt: {
        color: color.circle.main,
        borderColor: color.circle.main,
        borderWidth: 1
    },
    footer: {
        backgroundColor: color.circle.white,

    },

});
