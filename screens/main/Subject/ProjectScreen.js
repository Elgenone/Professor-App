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
import { getProjectStatistics } from 'library/redux/actions/StatisticActions';
import Spinner from 'library/components/Spinner';


class ProjectScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emty: "er",
        };
    }
    async componentDidMount(){
        let project = await this.props.project
        await this.props.getProjectStatistics(project)
        .then(()=>{
        })
        .catch(()=>{

        })
    }
    
    allStats =() =>{
        if(this.props.statistic.project_stats){
            let stats = this.props.statistic.project_stats
            let list = this.props.project.schedules.map((phase,index)=>{
    
                   return 
                   <Row style={styles.row}>
                        <Card style={styles.card}>
                            <CardItem header>
                                <Text style={styles.text3}>{strings.supject.Projects.card1.header}</Text>
                            </CardItem>
                            <CardItem>
                                <Col style={styles.col} >
                                    <ProgressCircle
                                        percent={stats.AbsenstsTeams[index]}
                                        radius={50}
                                        borderWidth={3}
                                        color={color.supject.secandmain}
                                        shadowColor="#F0EDF0"
                                        bgColor={color.supject.white}
                                    >
                                        <Text style={{ fontFamily: fonts.Regular, fontSize: 16 }}>{stats.AbsenstsTeams[index] + '%'}</Text>
                                    </ProgressCircle>
                                    <Text style={styles.text4}>{strings.supject.Projects.card1.circles.circle1}</Text>
            
                                </Col>
                                <Col style={styles.col3} >
                                    <ProgressCircle
                                        percent={stats.AttendsTeams[index]}
                                        radius={50}
                                        borderWidth={3}
                                        color={color.supject.main}
                                        shadowColor="#F0EDF0"
                                        bgColor={color.supject.white}
                                    >
                                        <Text style={{ fontFamily: fonts.Regular, fontSize: 16 }}>{stats.AttendsTeams[index] + '%'}</Text>
                                    </ProgressCircle>
                                    <Text style={styles.text4}>{strings.supject.Projects.card1.circles.circle2}</Text>
            
                                </Col>
                                <Col style={styles.col}  >
                                    <ProgressCircle
                                        percent={stats.DelayesTeams[index]}
                                        radius={50}
                                        borderWidth={3}
                                        color={color.supject.main}
                                        shadowColor="#F0EDF0"
                                        bgColor={color.supject.white}
                                    >
                                        <Text style={{ fontFamily: fonts.Regular, fontSize: 16 }}>{stats.DelayesTeams[index] + '%'}</Text>
                                    </ProgressCircle>
                                    <Text style={styles.text4}>{strings.supject.Projects.card1.circles.circle3}</Text>
            
                                </Col>
            
                            </CardItem>
                        </Card>
        
                   </Row> 
                
            })
            return list
        }

    }

    render() {

        const isemty = []
        if (!this.props.statistic.project_stats) {
            isemty.push(
                <Row style={{ textAlign: 'center', alignItems: "center", justifyContent: 'center', height: 400, }}>
                    <Text note >No project assigned yet !</Text>
                </Row>)
        } else {
            isemty.push(
                <Grid>
                    <Row style={styles.row1}>
                        <Col style={styles.col} size={1}>
                            <Text style={styles.text1}>{this.props.statistic.project_stats.Teams}</Text>
                            <Text note style={styles.text2}>{strings.supject.Projects.info.info1}</Text>
                        </Col>
                        <Col style={styles.col} size={1}>
                            <Text style={styles.text1}>{this.props.statistic.project_stats.group}</Text>
                            <Text note style={styles.text2}>{strings.supject.Projects.info.info2}</Text>
                        </Col>
                        <Col style={styles.col} size={1}>
                            <Text style={styles.text1}>{this.props.statistic.project_stats.phases}</Text>
                            <Text note style={styles.text2}>{strings.supject.Projects.info.info3}</Text>
                        </Col>
                    </Row>

                {this.allStats()}


                </Grid>
            )

        }

        return (


            <Container >
                <Content padder>
                    {isemty}

                </Content>
            </Container>

        );
    }
}

const loadingSelector = createLoadingSelector(['GET_PROJECT_STAT_REQUEST']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    statistic: state.statistics,
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    getProjectStatistics: bindActionCreators(getProjectStatistics, dispatch),
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(ProjectScreen);

const styles = StyleSheet.create({

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
        //width: "55%",
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
