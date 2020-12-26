import React, { Component } from 'react';
import { View, Alert, ImageBackground, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Grid, Toast, Row, Text, Left, List, ListItem, Root, Right, Content, Button, Col } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import color from 'res/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSubjects,getContents } from 'library/redux/actions/HomeAction';



 class DateScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empty: "er",
        };
    }
    async componentDidMount(){
        
    }

    _ontimepress() {
        this.props.navigation.navigate('timetable')
    }
    _onyourtimepress() {
        /*Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay',
            duration:3000,
            position:"top",
            onClose:this.props.navigation.navigate('info')
          })*/

    }



    render() {
        const item = []
        this.props.home.contents.map(value=> {
            item.push(
                <List>
                    <Button
                        //button={true}
                        
                        transparent
                        style={styles.button2}
                        onPress={this._onyourtimepress.bind(this)}
                    >
                        <Left>
                            <Text style={styles.text4}>{strings.ls.data.day}</Text>
                            <Text style={styles.text5}>{value.time + ' am' + ' - ' + value.to +' am'}</Text>
                        </Left>
                        <Right>
                            <Text ><Icon name="trash" style={styles.Icon2} /></Text>
                        </Right>
                    </Button>
                </List>

            )
        })

        const isempty = []
        if (this.state.empty == "") {
            isempty.push(
                <Row style={{ textAlign: 'center', alignItems: "center", justifyContent: 'center', }}>
                    <Text note >{strings.ls.data.emtpy}</Text>
                </Row>)
        } else {
            isempty.push(item)
        }

        return (

            <Content padder>
                <Grid>
                        <Row size = {40} style={styles.row}>
                            <Button
                                small
                                style={styles.button}
                                onPress={this._ontimepress.bind(this)}
                                >
                                <View style={styles.view}>
                                    <ImageBackground style={styles.image}>
                                        <Icon name='plus' style={styles.Icon} />
                                    </ImageBackground>
                                    <Text style={styles.text1}>{strings.ls.data.button.header}</Text>
                                    <Text style={styles.text2}>{strings.ls.data.button.sub}</Text>
                                </View>
                            </Button>
                        </Row>
                        <Text style={styles.text3}>{strings.ls.data.yourtimetables}</Text>
                        <Row size = {60}>
                            <Col>
                            {isempty}
                            </Col>
                        </Row>                                      
                             
                    </Grid>
            </Content>

        );
    }
}

// const loadingSelector = createLoadingSelector(['GET_HOME','GET_LECTURE']);
// const errorSelector = createErrorMessageSelector(['GET_HOME','GET_LECTURE']);

const mapStateToProps = (state) => {
  return {
    home: state.home,
    auth: state.auth
  };
}



export default connect(mapStateToProps)(DateScreen);

const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: '#FFFFFF',
        elevation: 6,
        marginBottom: 25

    },
    button2: {

        // width: 400,
        // height: 50,
        borderBottomColor: "#CECCC6",
        borderBottomWidth: 1,
        marginBottom: 5

    },
    view: {
        alignItems: "center",
        justifyContent: 'center',
        // width: 150,
        height: 150,
    },

    row: {
        
        alignItems: "center",
        justifyContent: 'center',
        
    },
    text1: {
        fontFamily: fonts.Regular,
        color: "#7A1EA1",
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        fontSize:9,
        marginBottom:5,
    },
    text2: {
        fontFamily: fonts.Regular,
        color:"#3E3E40",
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        fontSize:7,
    },
    text3: {
        fontFamily: fonts.Bold,
        fontSize: 13,
        marginBottom: 25,
        color:"#3E3E40",
    },
    text5: {
        fontFamily: fonts.Regular,
        fontSize: 14,
        color:"#6C6C6FD8",
    },
    image: {
        backgroundColor: "#2E2C15",
        color: "#F6F6F3",
        borderRadius: 50,
        width: 50,
        height: 50,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom:8,

    },
    Icon: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#F6F6F3",

    },
    text4: {
        fontFamily: fonts.Regular,
        color: "#FFC107",
        marginBottom: 5,
        fontSize: 16,
    },
    Icon2: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFC107",

    },

});
