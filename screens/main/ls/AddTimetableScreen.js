import React, { Component } from 'react';
import { View, Alert, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
//import HorizontalPicker from 'react-native-horizontal-picker';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Container, Grid, Row, Text, Footer, FooterTab, Content, Button, } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(25);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;


let datesWhitelist = [
    {
        start: moment(),
        end: moment().add(4, 'years'), // total 4 days enabled
    },
];
//let datesBlacklist = [moment().add(4 , 'days')]; // 1 day disabled

export default class AddTimetableScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: moment(),
            slider1ActiveSlide: 5,
        };
        this.init();
    }

    init() {
        this.state = {
            times: [
                { title: '7:00 am' },
                { title: '7:15 am' },
                { title: '7:30 am' },
                { title: '7:45 am' },
                { title: '8:00 am' },
                { title: '8:15 am' },
                { title: '8:30 am' },
                { title: '8:45 am' },
                { title: '9:00 am' },
                { title: '9:15 am' },
                { title: '9:30 am' },
                { title: '9:45 am' },
                { title: '10:00 am' },
                { title: '10:15 am' },
                { title: '10:30 am' },
                { title: '10:45 am' },
                { title: '11:00 am' },
                { title: '11:15 am' },
                { title: '11:30 am' },
                { title: '11:45 am' },
                { title: '12:00 pm' },
                { title: '12:15 pm' },
                { title: '12:30 pm' },
                { title: '12:45 pm' },
                { title: '13:00 pm' },
                { title: '13:15 pm' },
                { title: '13:30 pm' },
                { title: '13:45 pm' },
                { title: '14:00 pm' },
                { title: '14:15 pm' },
                { title: '14:30 pm' },
                { title: '14:45 pm' },
                { title: '15:00 pm' },
                { title: '15:15 pm' },
                { title: '15:30 pm' },
                { title: '15:45 pm' },
                { title: '16:00 pm' },
                { title: '16:15 pm' },
                { title: '16:30 pm' },
                { title: '16:45 pm' },
                { title: '17:00 pm' },
                { title: '17:15 pm' },
                { title: '17:30 pm' },
                { title: '17:45 pm' },
                { title: '18:00 pm' },
            ],
        }
    }


    _renderItem2 = ({ item, index }) => {
        return (
            <View style={styles.slide2}>
                <Text style={styles.title2}>{item.title}</Text>
            </View>

        );
    }

    _onsavepress() {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // alert(days[new Date(this.calendarStrip.getSelectedDate()).getDay()])
        // alert(this.state.times[this._carouselFrom._activeItem].title)
        // alert(this.state.times[this._carouselTo_activeItem].title)
        let data = {
            day : days[new Date(this.calendarStrip.getSelectedDate()).getDay()],
            from : this.state.times[this._carouselFrom._activeItem].title,
            to : this.state.times[this._carouselTo._activeItem].title,
        }
        this.props.navigation.navigate('swiper',{data:data})
    }


    render() {


        return (

            <Container >
                <Content padder>
                    <Grid>
                        <Row style={{ textAlign: "center", alignItems: "center", justifyContent: 'center' }}>

                            <Text style={styles.text1}>{strings.ls.timetable.header}</Text>
                        </Row>

                        <Row style={{ textAlign: "center", alignItems: "center", justifyContent: 'center' }}>
                            <CalendarStrip
                            ref={(calendarStrip) => {
                                this.calendarStrip = calendarStrip;
                            }}
                                calendarAnimation={{ type: 'sequence', duration: 30 }}
                                    daySelectionAnimation={
                                        {
                                        type: 'border',
                                        duration: 200,
                                        borderWidth: 1,
                                        borderHighlightColor: '#7A1EA1',

                                    },
                                    {
                                        type: 'background',
                                        highlightColor: '#7A1EA1',
                                    }
                                    }
                                style={{ height: "100%", paddingTop: 10, paddingBottom: 10, width: "100%" }}
                                calendarHeaderStyle={{ color: '#7A1EA1', fontFamily: fonts.Bold, paddingBottom: 5 }}
                                dateNumberStyle={{ color: '#7A1EA1', fontFamily: fonts.Bold, }}
                                dateNameStyle={{ color: '#7A1EA1', fontFamily: fonts.Bold, }}
                                highlightDateNumberStyle={{ color: '#F6F6F3', }}
                                highlightDateNameStyle={{ color: '#F6F6F3', }}
                                disabledDateNameStyle={{ color: '#7A1EA1', fontFamily: fonts.Bold, }}
                                disabledDateNumberStyle={{ color: '#7A1EA1', fontFamily: fonts.Bold, }}
                                disabledDateOpacity={1}
                                datesWhitelist={datesWhitelist}

                                // datesBlacklist={datesBlacklist}
                                iconContainer={{ flex: 0.1 }}
                                dateContainerStyle={{ borderWidth: 1, borderColor: '#7743CE', borderRadius: 50 }}
                            // markedDatesStyle={{borderWidth: 1, borderColor: '#7743CE' , borderRadius:50}}

                            />


                        </Row>
                        <Row>
                            <Text style={styles.text2}>{strings.ls.timetable.warn}</Text>
                        </Row>
                        <Row style={{ textAlign: "center", alignItems: "center", justifyContent: 'center' }}>
                            <Text style={styles.text3}>{strings.ls.timetable.from}</Text>
                        </Row>
                        <Row>
                            <Carousel
                                ref={(c) => { this._carouselFrom = c; }}
                                data={this.state.times}
                                renderItem={this._renderItem2}
                                sliderWidth={sliderWidth}
                                itemWidth={itemWidth}
                                layout={'default'}
                                firstItem={4}
                                inactiveSlideOpacity={0.3}
                                containerCustomStyle={{ borderBottomWidth: 1, marginBottom: 15, paddingBottom: 15, borderBottomColor: "#E3E8E0" }}
                            />

                        </Row>
                        <Row style={{ textAlign: "center", alignItems: "center", justifyContent: 'center' }}>
                            <Text style={styles.text3}>{strings.ls.timetable.to}</Text>
                        </Row>
                        <Row>
                            <Carousel
                                ref={(c) => { this._carouselTo = c; }}
                                data={this.state.times}
                                renderItem={this._renderItem2}
                                sliderWidth={sliderWidth}
                                itemWidth={itemWidth}
                                layout={'default'}
                                firstItem={8}
                                inactiveSlideOpacity={0.3}
                                containerCustomStyle={{ marginBottom: 15, paddingBottom: 15 }}

                            />
                        </Row>

                    </Grid>

                </Content>
                <Footer style={styles.footer}>
                    <FooterTab style={styles.footer}>
                        <Button
                            block
                            transparent
                            style={styles.button}
                            onPress={this._onsavepress.bind(this)}
                        >
                            <Text style={styles.text4}>{strings.ls.timetable.button}</Text>
                        </Button>

                    </FooterTab>
                </Footer>

            </Container>

        );
    }
}

const styles = StyleSheet.create({
    active: {
        fontFamily: fonts.Bold,
        color: "#F0E9F2",
        backgroundColor: "#7111A6",
    },

    button: {
        alignItems: "center",
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: "#E1DAE1",


    },

    view: {
        alignItems: "center",
        justifyContent: 'center',
        width: 150,
        height: 150,
    },

    text1: {
        fontFamily: fonts.Bold,
        color: "#7B1FA2",
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 20,
        fontSize:15,
        marginTop:50,

    },
    text2: {
        fontFamily: fonts.Regular,
        marginTop: 20,
        marginBottom:30,
        marginRight:130,
        fontSize:9,
        opacity:0.5,
        color:"#3E3E40"
    },
    text3: {
        fontFamily: fonts.Regular,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 18,
        marginTop:18,
        color:"#6C6C6FCB",

    },
    text4: {
        fontFamily: fonts.Bold,
        color: "#7B1FA2",
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        fontSize:14,
    },
    text5: {
        fontFamily: fonts.Regular,
        marginBottom: 40,
    },
    slide: {

        borderColor: "#7111A6",
        borderRadius: 50,
        borderWidth: 1,
        padding: 5

    },

    title2: {
        fontFamily: fonts.Regular,
        fontSize: 20,
        color: "#7111A6",
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: "#FFFFFF",

    },


});
