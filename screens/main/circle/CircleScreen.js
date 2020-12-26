import React, { Component } from 'react';
import { View, Alert, ImageBackground, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Butn from 'library/components/Button';

//import HorizontalPicker from 'react-native-horizontal-picker';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Container, Grid, Row, Text, Card, CardItem, List, ListItem, Content, Button, } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import color from 'res/colors';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import Spinner from 'library/components/Spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCircles } from 'library/redux/actions/HomeAction';

let datesWhitelist = [
    {
        start: moment(),
        end: moment().add(4, 'years'), // total 4 days enabled
    },
];
//let datesBlacklist = [moment().add(4 , 'days')]; // 1 day disabled

class CircleScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _oncarditempress=(students)=> {
        this.props.navigation.navigate('circleDetails',{students:students})
    }

    async componentDidMount(){
        this.props.getCircles()
        .then(()=>{

            // alert(this.props.home.circles[0].subjectName)
        })
        .catch(()=>{
            alert(this.props.error.error)
        })
    }

    render() {

        const items = []
        this.props.home.circles.map(circle=>{
            items.push(
                <Row>
                    <Card style={styles.card}>
                        <CardItem
                            button={true}
                            onPress={this._oncarditempress.bind(this,circle.students)}
                        >
                            <Text style={styles.text1}>{circle.name}</Text>
                            <Butn
                                title={circle.students.length + " enrolled"}
                                style={styles.button}
                                onPress={this._oncarditempress.bind(this,circle.students)}                                
                                titleStyle={styles.text}
                            >
                            </Butn>
                        </CardItem>
                    </Card>
                </Row>
            )
        })


        return (

            <Container >
                <Spinner isVisible={this.props.isLogging} />

                <Content padder>
                    <Grid>
                        <Row style={{ textAlign: "center", alignItems: "center", justifyContent: 'center' }}>
                            <CalendarStrip
                                calendarAnimation={{ type: 'sequence', duration: 30 }}
                                daySelectionAnimation={{
                                    type: 'border',
                                    duration: 200,
                                    borderWidth: 1,
                                    borderHighlightColor: '#7A1EA1',

                                }, {
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
                        {items}

                    </Grid>

                </Content>

            </Container>

        );
    }
}

const loadingSelector = createLoadingSelector(['GET_CIRCLE']);
const errorSelector = createErrorMessageSelector(['GET_CIRCLE']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),
    home: state.home,
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    getCircles: bindActionCreators(getCircles, dispatch)
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(CircleScreen);


const styles = StyleSheet.create({
    card: {
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
    },

    button: {
        backgroundColor: color.circle.main,
        alignItems: "center",
        justifyContent: 'center',
        width: 60,
        height: 18,
        borderRadius:20,
        textAlign:"center",
        alignItems: "center",
        justifyContent: 'center',

        //width: "28%",

    },
    text1: {
        fontFamily: fonts.Regular,
        fontSize: 16,
        marginRight: 13,
    },
    text: {
        fontFamily: fonts.Regular,
        color: "#FFFFFF",
        fontSize: 8,
        width: "100%",
        height: 10,
        textAlign:"center",
        alignItems: "center",
        justifyContent: 'center',

    },


});
