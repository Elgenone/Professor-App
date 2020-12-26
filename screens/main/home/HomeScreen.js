import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ImageBackground, StatusBar } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import Spinner from 'library/components/Spinner';

import { Container, Grid, Row,Icon, Text, Card, Root, CardItem, ListItem, Content, Button, Col, Body, Right, Left, } from 'native-base';
import fonts from 'res/fonts';
import { SwipeRow } from 'react-native-swipe-list-view';
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSubjects,getContents } from 'library/redux/actions/HomeAction';
import { getUser } from 'library/redux/actions/AuthActions';
import { RNToasty } from 'react-native-toasty'


var BUTTONS = [
  <Row style = {{width: '100%', alignItems: 'center', paddingLeft: 20}}>
    <Icon name="close" style={{color:"#FFC107", marginRight: 5}} size={18}/>
    <Text style = {{fontSize:17, fontFamily:fonts.Regular, color: '#505052'}}>Cancel</Text>
  </Row>,
  <Row style = {{width: '100%', alignItems: 'center', paddingLeft: 20}}>
    <Icon name="create" style={{color:"#FFC107", marginRight: 5}} size={18}/>
    <Text style = {{fontSize:17, fontFamily:fonts.Regular, color: '#505052'}}>Edit</Text>
  </Row>,
  <Row style = {{width: '100%', alignItems: 'center', paddingLeft: 20}}>
    <Icon name="clock" style={{color:"#FFC107", marginRight: 5}} size={18}/>
    <Text style = {{fontSize:17, fontFamily:fonts.Regular, color: '#505052'}}>Delay</Text>
  </Row>,
  <Row style = {{width: '100%', alignItems: 'center', paddingLeft: 20}}>
      <Icon name="trash" style={{color:"#FF3E3E", marginRight: 5}} size={18}/>
      <Text style = {{fontSize:17, fontFamily:fonts.Regular, color: '#505052'}}>Delete</Text>
    </Row>
  /*{ text: "Edite", icon: "create", iconColor: "#F1B50E" },
  { text: "Delay", icon: "clock", iconColor: "#F1B50E" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },*/
];
var DESTRUCTIVE_INDEX = 1;




 class HomeScreen extends Component {

  state = {
    isVisible: false,
    myuser:{}
  }

   allSubjects=()=>{ //n refer to this
    let subjects = this.props.home.subjects
    return subjects
  }



   SubjectContent=()=>{
     let contents = this.props.home.contents
    return contents
  }


  constructor(props) {
    super(props);    

    this.state = {
      slider1ActiveSlide: 5,
      empty: "r",

    };
    
  }


  
   async componentDidMount(){

    // TODO: this should be deleted after linking it with back-end
    // setTimeout(() => {
    //   this.props.navigation.navigate('invitation')
    // }, 3000)

   await this.props.getSubjects()
    .then(()=>{
      
    }).catch(()=>{
      RNToasty.Error({
        title: this.props.error,
      })
    })

   await this.props.getContents()
    .then(()=>{

      }).catch(()=>{
      RNToasty.Error({
        title: this.props.error,
      })
    })

 

  }


  Item(name,location,joined,time) {
    return (

      <Card style={styles.item}>
        <CardItem >
          <Col>
            <Icon2 style={{marginLeft:"80%"}} name='dots-three-horizontal' size={25} onPress={this.showActionSheet} />
            <ActionSheet
              ref={o => this.ActionSheet = o}
              //title={<Text style={{ color: '#000', fontSize: 18 }}>Which one do you like?</Text>}
              options={BUTTONS}
              
              cancelButtonIndex={0}
              destructiveButtonIndex={3}
              //onPress={(index) => { /* do something */ }}
            />
            <Text style={styles.text3}>{name}</Text>
            <Text style={styles.text2}>enroled: {joined}</Text>
          </Col>
        </CardItem>
        <CardItem >
          <Col>
            <Text note style={styles.cardNote}><Icon2 name='location-pin' size={20} /> {location}</Text>
            <Text note style={styles.cardNote}> <Icon2 name='clock' size={15} />  {time} Am</Text>
          </Col>
        </CardItem>
      </Card>

    );
  }

  renderEmptySubjects() {
    return (
      <Row style={{ justifyContent: 'center' }}>
        <Text note style={{ fontFamily: fonts.Regular, color: '#3E3E40', opacity: 0.5, fontSize: 15 }} >You don't have any Subjects yet!</Text>
      </Row>
    )
  }

  renderSubjects() {
    return this.allSubjects().map((index) => (
      <SwipeRow key={index.created_at} rightOpenValue={-85} onRowPress={() => this.props.navigation.navigate('subject',{subject:index})}>
        <View style={styles.rowBack}>
          <Card transparent>
            <Button elevation={0} style={{ height: '100%', backgroundColor: '#FFC107', borderTopEndRadius: 15, borderBottomEndRadius: 15 }}>
              <Text style={[styles.text4, { fontSize: 14, color: '#fff' }]}>Archive</Text>
            </Button>
          </Card>
        </View>
        <Card style={{ borderRadius: 15, elevation: 2.5 }} >
          <CardItem style={styles.cardItem} >
            <Col>
              <Text style={styles.text4}>{index.name}</Text>
              <Row style={{ marginTop: 15 }}>
                <Button
                  small
                  rounded
                  style={styles.button1}

                >
                  <Text style={styles.text5}>{index.enrolled_students.length} Students</Text>
                </Button>
                <Button
                  small
                  rounded
                  style={styles.button2}
                >
                  <Text style={styles.text5}>{index.joined_ta.length} Assistant</Text>
                </Button>
              </Row>
            </Col>

          </CardItem>
        </Card>
      </SwipeRow>
    ))
  }
  
  showActionSheet = () => {
    this.ActionSheet.show()
  }

  render() {

    return (
      <Container>
          <Spinner isVisible={this.props.isLogging} />
        <Root>
          <StatusBar backgroundColor='#F6F6F6' barStyle="dark-content" />
          <Content padder >

            <Grid style={{ paddingTop: 25 }}>
              <Row style={styles.row}>
                <Text style={styles.text1}>{this.props.auth.user.isTA?"sections":"lectures"}</Text>
              </Row>
              <FlatList
                data={this.SubjectContent()}
                renderItem={({ item }) => {
                   return this.Item(item.subject_name,item.location,item.joined,item.time)
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={() => (
                  <Card style={[styles.item, { justifyContent: 'center' }]}>
                    <CardItem button onPress={() => this.props.navigation.navigate('ls')}>
                      <Col style={{ alignItems: 'center' }}>
                        <ImageBackground style={styles.image}>
                          <Icon2 name='plus' style={styles.Icon} />
                        </ImageBackground>
                        <Text style={styles.text6}>{this.props.auth.user.isTA?'Add Section':'Add Lecture'}</Text>
                      </Col>
                    </CardItem>
                  </Card>
                )}

                keyExtractor={item => item.id}
              />

              <Row style={[styles.row, { marginTop: 10 }]}>
                <Text style={styles.text1}>Subjects</Text>
              </Row>


              {
                this.allSubjects().length ? this.renderSubjects() : this.renderEmptySubjects()
              }
            </Grid>
          </Content>
        </Root>
      </Container>
    );
  }
}

const loadingSelector = createLoadingSelector(['GET_HOME','GET_LECTURE']);
const errorSelector = createErrorMessageSelector(['GET_HOME','GET_LECTURE']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),
    home: state.home,
    auth: state.auth
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    getSubjects: bindActionCreators(getSubjects, dispatch),
    getContents: bindActionCreators(getContents, dispatch)
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(HomeScreen);


const styles = StyleSheet.create({
  rowFront: {

  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  cardNote: {
    fontFamily: fonts.Light,
    fontSize: 13,
    color: '#3E3E40',
    opacity: 0.7,
    marginBottom: 5,

  },
  text1: {
    fontFamily: fonts.Bold,
    color: '#3E3E40',
    fontSize: 14
  },
  text3: {
    fontFamily: fonts.Bold,
    fontSize: 18,
    color: '#3E3E40'
  },
  text2: {
    fontFamily: fonts.Regular,
    opacity: 0.6,
    fontSize: 12,
    color: '#3E3E40'
  },
  text4: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: '#3E3E40'

  },
  text5: {
    fontFamily: fonts.Regular,
    color: "#FFFFFF",
    fontSize: 9,
  },
  button1: {
    backgroundColor: "#7111A6",
    alignItems: "center",
    justifyContent: 'center',
    //width: "25%",
  },
  button2: {
    backgroundColor: "#7111A6",
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 5
    //width: "25%",
  },
  row: {
    marginBottom: 15,
  },
  swipeout: {
    marginBottom: 10,
    borderRadius: 20,
  },
  view: {
    alignItems: "center",
    justifyContent: 'center',


  },
  image: {
    backgroundColor: "#2E2C15",
    color: "#F6F6F3",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2.5
    

  },
  text6: {
    fontFamily: fonts.Regular,
    color: "#FEC007",
    marginTop: 10,
    fontSize: 13,
    textAlign: 'center'

  },
  Icon: {
    fontSize: 35,
    color: "#FDBF06",
    
    
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 70,
    backgroundColor: '#fff',

  },
  item: {
    width: 170,
    marginRight: 10,
    height: 170,
    elevation: 2.5
  },
  cardItem: {
    borderRadius: 15

  }

})
