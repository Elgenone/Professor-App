import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Container, Content, Grid, Row, Col, Text, Left, Right, Card, CardItem, Button, List, ListItem } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import color from 'res/colors';
import ProgressCircle from 'react-native-progress-circle';
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStatistics } from 'library/redux/actions/StatisticActions';
import Spinner from 'library/components/Spinner';


 class StatisticScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        
    }

    async componentDidMount(){
        let subject = await this.props.subject
        await this.props.getStatistics(subject)
        .then(()=>{
        })
        .catch(()=>{

        })
    }        


    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

        return (


            <Container >
                <Spinner isVisible={this.props.isLogging} />
                <Content padder>
                    <Grid>
                        <Row style={styles.row}>
                            <Col style={styles.col} size={1}>
                                <Text style={styles.text1}>{this.props.statistic.stats.MissedSections}</Text>
                                <Text note style={styles.text2}>{strings.supject.statistic.info.info1}</Text>
                            </Col>
                            <Col style={styles.col} size={1}>
                                <Text style={styles.text1}>{this.props.statistic.stats.MissedLectures}</Text>
                                <Text note style={styles.text2}>{strings.supject.statistic.info.info2}</Text>
                            </Col>
                            <Col style={styles.col} size={1}>
                                <Text style={styles.text1}>{this.props.statistic.stats.TA_num}</Text>
                                <Text note style={styles.text2}>{strings.supject.statistic.info.info3}</Text>
                            </Col>
                            <Col style={styles.col} size={1}>
                                <Text style={styles.text1}>{this.props.statistic.stats.enrolled_students}</Text>
                                <Text note style={styles.text2}>{strings.supject.statistic.info.info4}</Text>
                            </Col>
                        </Row>
                        <Row style={styles.row}>
                            <Card style={styles.card}>
                                <CardItem header>
                                    <Text style={styles.text3}>{strings.supject.statistic.card1.header}</Text>
                                </CardItem>
                                <CardItem>
                                    <Col style={styles.col2} >
                                        <ProgressCircle
                                            percent={this.props.statistic.stats.Absents_Lectures}
                                            radius={50}
                                            borderWidth={3}
                                            color={color.supject.secandmain}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.supject.white}
                                        >
                                            <Text style={{ fontSize: 18 }}>{this.props.statistic.stats.Absents_Lectures + '%'}</Text>
                                        </ProgressCircle>
                                        <Text style={styles.text4}>{strings.supject.statistic.card1.circles.circle1}</Text>

                                    </Col>
                                    <Col style={styles.col3} >
                                        <ProgressCircle
                                            percent={this.props.statistic.stats.Attended_Lectures}
                                            radius={50}
                                            borderWidth={3}
                                            color={color.supject.main}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.supject.white}
                                        >
                                            <Text style={{ fontSize: 18 }}>{this.props.statistic.stats.Attended_Lectures + '%'}</Text>
                                        </ProgressCircle>
                                        <Text style={styles.text4}>{strings.supject.statistic.card1.circles.circle2}</Text>

                                    </Col>
                                    <Col style={styles.col2}  >
                                        <ProgressCircle
                                        containerStyle={{}}
                                        outerCircleStyle={{}}
                                            percent={this.props.statistic.stats.numOfCircles_Lectures}
                                            radius={50}
                                            borderWidth={3}
                                            color={color.supject.main}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.supject.white}
                                        >
                                            <Text style={{ fontSize: 18 }}>{this.props.statistic.stats.numOfCircles_Lectures + '%'}</Text>
                                        </ProgressCircle>
                                        <Text style={styles.text4}>{strings.supject.statistic.card1.circles.circle3}</Text>

                                    </Col>

                                </CardItem>
                            </Card>

                        </Row>
                        <Row style={styles.row}>
                            <Card style={styles.card}>
                                <CardItem header>
                                    <Text style={styles.text3}>{strings.supject.statistic.card2.header}</Text>
                                </CardItem>
                                <CardItem>
                                    <Col style={styles.col2} >
                                        <ProgressCircle
                                            percent={this.props.statistic.stats.Absents_Sections}
                                            radius={50}
                                            borderWidth={3}
                                            color={color.supject.secandmain}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.supject.white}
                                        >
                                            <Text style={{ fontSize: 16, fontFamily: fonts.Regular, }}>{this.props.statistic.stats.Absents_Sections + '%'}</Text>
                                        </ProgressCircle>
                                        <Text style={styles.text4}>{strings.supject.statistic.card2.circles.circle1}</Text>

                                    </Col>
                                    <Col style={styles.col3} >
                                        <ProgressCircle
                                            percent={this.props.statistic.stats.Attended_Sections}
                                            radius={50}
                                            borderWidth={3}
                                            color={color.supject.main}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.supject.white}
                                        >
                                            <Text style={{ fontSize: 16, fontFamily: fonts.Regular, }}>{this.props.statistic.stats.Attended_Sections + '%'}</Text>
                                        </ProgressCircle>
                                        <Text style={styles.text4}>{strings.supject.statistic.card2.circles.circle2}</Text>

                                    </Col>
                                    <Col style={styles.col2}  >
                                        <ProgressCircle
                                            percent={this.props.statistic.stats.numOfCircles_Sections}
                                            radius={50}
                                            borderWidth={3}
                                            color={color.supject.main}
                                            shadowColor="#F0EDF0"
                                            bgColor={color.supject.white}
                                        >
                                            <Text style={{ fontSize: 16, fontFamily: fonts.Regular, }}>{this.props.statistic.stats.numOfCircles_Sections + '%'}</Text>
                                        </ProgressCircle>
                                        <Text style={styles.text4}>{strings.supject.statistic.card2.circles.circle3}</Text>

                                    </Col>

                                </CardItem>
                            </Card>

                        </Row>

                    </Grid>
                </Content>
            </Container>

        );
    }
}

const loadingSelector = createLoadingSelector(['GET_STAT']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    statistic: state.statistics,
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    getStatistics: bindActionCreators(getStatistics, dispatch),
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(StatisticScreen);

const styles = StyleSheet.create({

    row: {
        marginTop: 40,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    col: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    col2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width:"33%",
       // marginLeft:7,
       // marginRight:7
    },
    col3: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width:"33%",
        marginLeft:12,
        marginRight:12
    },
    card: {
        width: "100%",
    },
    text1: {
        fontFamily: fonts.Bold,
        fontSize: 22,
        //marginLeft: 19,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        color: color.supject.main,
    },
    text2: {
        fontFamily: fonts.Light,
        fontSize: 10,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 12,
        //marginLeft: 19,
        color: "#212121CC",
    },
    text3: {
        fontFamily: fonts.Regular,
        color: "#3E3E40",
        marginTop: 10,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
    },
    text4: {
        fontFamily: fonts.Regular,
        color: "#3E3E40",
        marginTop: 10,
        fontSize: 13,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',

    },


});
