import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { Container, Thumbnail, Text, Content, Row, Col, Card, CardItem, Button, } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import color from 'res/colors';
import images from 'res/images';
import ProgressCircle from 'react-native-progress-circle';
import T_Button from 'library/components/Button';
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTAStatistics } from 'library/redux/actions/StatisticActions';
import Spinner from 'library/components/Spinner';

class AssistantDetailsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    async componentDidMount(){
        await this.props.getTAStatistics(this.props.navigation.state.params.sections)
        .then(()=>{
        })
        .catch(()=>{
            
        })
        
    }     


    render() {
        // const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

        return (

            <Container >
                <Content padder>
                    <Row style={styles.row}>
                        <Col style={styles.col}>
                            <Thumbnail large source={images.me} />
                        </Col>
                    </Row>
                    <Row style={styles.row}>

                        <T_Button
                            title={strings.supject.assistantprofile.button}
                            rounded
                            style={styles.button1}
                            shadow={true}
                            titleStyle={{ fontFamily: fonts.Regular, fontSize: 12,color:"#FFFFFF" }}
                        //onPress={this._oneditepress.bind(this)}
                        >
                            <Text style={{ fontFamily: fonts.Regular, fontSize: 12 }}>{strings.supject.assistantprofile.button}</Text>
                        </T_Button>

                    </Row>

                    <Row style={styles.row1}>
                        <Col style={styles.col} size={1}>
                            <Text style={styles.text1}>{this.props.statistic.TA_stats.MissedSections}</Text>
                            <Text note style={styles.text2}>{strings.supject.assistantprofile.info.info1}</Text>
                        </Col>
                        <Col style={styles.col} size={1}>
                            <Text style={styles.text1}>{this.props.statistic.TA_stats.enrolled_students}</Text>
                            <Text note style={styles.text2}>{strings.supject.assistantprofile.info.info2}</Text>
                        </Col>

                    </Row>
                    <Row style={styles.row}>
                        <Card style={styles.card}>
                            <CardItem header>
                                <Text style={styles.text3}>{strings.supject.assistantprofile.card1.header}</Text>
                            </CardItem>
                            <CardItem>
                                <Col style={styles.col} >
                                    <ProgressCircle
                                        percent={this.props.statistic.TA_stats.Absents_Sections}
                                        radius={50}
                                        borderWidth={3}
                                        color={color.supject.secandmain}
                                        shadowColor="#F0EDF0"
                                        bgColor={color.supject.white}
                                    >
                                        <Text style={{ fontFamily: fonts.Regular, fontSize: 16 }}>{this.props.statistic.TA_stats.Absents_Sections + '%'}</Text>
                                    </ProgressCircle>
                                    <Text style={styles.text4}>{strings.supject.assistantprofile.card1.circles.circle1}</Text>

                                </Col>
                                <Col style={styles.col3} >
                                    <ProgressCircle
                                        percent={this.props.statistic.TA_stats.Attended_Sections}
                                        radius={50}
                                        borderWidth={3}
                                        color={color.supject.main}
                                        shadowColor="#F0EDF0"
                                        bgColor={color.supject.white}
                                    >
                                        <Text style={{ fontFamily: fonts.Regular, fontSize: 16 }}>{this.props.statistic.TA_stats.Attended_Sections + '%'}</Text>
                                    </ProgressCircle>
                                    <Text style={styles.text4}>{strings.supject.assistantprofile.card1.circles.circle2}</Text>

                                </Col>
                                <Col style={styles.col}  >
                                    <ProgressCircle
                                        percent={this.props.statistic.TA_stats.numOfCircles_Sections}
                                        radius={50}
                                        borderWidth={3}
                                        color={color.supject.main}
                                        shadowColor="#F0EDF0"
                                        bgColor={color.supject.white}
                                    >
                                        <Text style={{ fontFamily: fonts.Regular, fontSize: 16 }}>{this.props.statistic.TA_stats.numOfCircles_Sections + '%'}</Text>
                                    </ProgressCircle>
                                    <Text style={styles.text4}>{strings.supject.assistantprofile.card1.circles.circle3}</Text>

                                </Col>

                            </CardItem>
                        </Card>

                    </Row>
                </Content>
            </Container>

        );
    }
}
const loadingSelector = createLoadingSelector(['GET_AST_STAT']);

const mapStateToProps = (state) => {
    return {
      isLogging: loadingSelector(state),
      statistic: state.statistics,
    };
  }
  
  const mapDisptachToProps = (dispatch) => {
    return {
      getTAStatistics: bindActionCreators(getTAStatistics, dispatch),
    }
  }
  export default connect(mapStateToProps, mapDisptachToProps)(AssistantDetailsScreen);

const styles = StyleSheet.create({

    button1: {
        fontFamily: fonts.Regular,
        width:100,
        height:30,
       // paddingLeft: 10,
        //paddingRight: 10,
        backgroundColor: color.supject.secandmain,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    row: {
        marginTop: 40,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    row1: {
        marginTop: 40,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "50%",
    },
    col: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width:"33%",
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
        marginLeft: 19,
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
        marginLeft: 19,
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
