import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet, } from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import { Container, Thumbnail, Icon, Text, Content, Grid, Row, Col, Left, Right, Body, CardItem, Button, List, ListItem } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import images from 'res/images';
import Btn from 'library/components/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
  <Icon name="trash" style={{color:"#FF3E3E", marginRight: 5}} size={18}/>
  <Text style = {{fontSize:17, fontFamily:fonts.Regular, color: '#505052'}}>Delete</Text>
</Row>
 /* { text: "Edite", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" },*/
];
var DESTRUCTIVE_INDEX = 1;
var CANCEL_INDEX = 2;

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _oneditepress() {
    this.props.navigation.navigate('editeProfile')
  }
  _onchangepasspress() {
    this.props.navigation.navigate('changepassword')
  }
  showActionSheet = () => {
    this.ActionSheet.show()
  }

  async componentDidMount(){
  }

  render() {
    //const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (

      <Container >
        <Content>
          <Grid style={{ padding: 25 }}>
            <Row >
              <Col size={3}>
                <Text style={[styles.text1, { marginBottom: 5, color: '#212121', opacity: 0.75 }]}>{this.props.auth.user.fullname}</Text>
                <Text note style={{
                  fontFamily: fonts.Light,
                  fontSize: 12,
                  width: '70%',
                  color: '#212121',
                  opacity: .5
                }}>{this.props.auth.user.bio}</Text>
                <Text note style={styles.text2}>{this.props.auth.university}</Text>
              </Col>
              <Col size={1} style={{ alignItems: "center", justifyContent: 'center' }}>
                <Thumbnail large source={images.me} />
                <Button
                  style={styles.close}
                >
                  <Icon2 name='plus' style={styles.Icon1} onPress={this.showActionSheet} />
                  <ActionSheet
                    ref={o => this.ActionSheet = o}
                    //title={<Text style={{ color: '#000', fontSize: 18 }}>Which one do you like?</Text>}
                    options={BUTTONS}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={2}
                  //onPress={(index) => { /* do something */ }}
                  />
                </Button>
                <Btn title={strings.profile.profileScreen.button} titleStyle={styles.text3} style={styles.button1} shadow={true}
                  onPress={this._oneditepress.bind(this)}
                  rounded
                  small
                />

              </Col>

            </Row>

            <Row style={{ marginTop: 25, marginBottom: 30, alignItems: "center", justifyContent: 'center', textAlign: "center" }}>
              <Col style={{ alignItems: "center", justifyContent: 'center' }}>
                <Text style={[styles.text1, { fontFamily: fonts.Bold, fontSize: 22, color: '#212121', opacity: .5 }]}>21 </Text>
                <Text note style={{ fontFamily: fonts.Light, fontSize: 12, color: '#212121', opacity: .5 }}>{strings.profile.profileScreen.activity.info1}</Text>
              </Col>
              <Col style={{ alignItems: "center", justifyContent: 'center' }}>
                <Text style={[styles.text1, { fontFamily: fonts.Bold, fontSize: 22, color: '#212121', opacity: .5 }]}>5</Text>
                <Text note style={{ fontFamily: fonts.Light, fontSize: 12, color: '#212121', opacity: .5 }}>{strings.profile.profileScreen.activity.info2}</Text>
              </Col>
              <Col style={{ alignItems: "center", justifyContent: 'center' }}>
                <Text style={[styles.text1, { fontFamily: fonts.Bold, fontSize: 22, color: '#212121', opacity: .5 }]}>152</Text>
                <Text note style={{ fontFamily: fonts.Light, fontSize: 12, color: '#212121', opacity: .5 }}>{strings.profile.profileScreen.activity.info3}</Text>
              </Col>

            </Row>

            <Row >
              <Col>
                <Text style={{ fontFamily: fonts.SemiBold, color: '#6C6C6F', fontSize: 20, opacity: .5, marginBottom: 20 }}>{strings.profile.profileScreen.yourinfo}</Text>

                <List>
                  <Button block bordered light style={styles.button}>
                    <Left>

                      <Text note style={{ fontFamily: fonts.Light, fontSize: 14, color: '#6C6C6F' }}><Icon2 name="email" style={styles.Icon} />{this.props.auth.user.email}</Text>
                    </Left>

                  </Button>
                  <Button block bordered light style={styles.button}>
                    <Left>

                      <Text note style={{ fontFamily: fonts.Light, fontSize: 14, color: '#6C6C6F' }}><Icon2 name="mobile" style={styles.Icon} />{this.props.auth.user.phone}</Text>
                    </Left>

                  </Button>

                  <Button
                    block
                    bordered
                    light
                    style={styles.button}
                    onPress={this._onchangepasspress.bind(this)}
                  >
                    <Left >
                      <Text note style={{ fontFamily: fonts.Light, fontSize: 12, color: '#6C6C6F' }}><Icon2 name="key" style={[styles.Icon, { color: '#8B8B8B' }]} />{strings.profile.profileScreen.change}</Text>
                    </Left>
                    <Right>
                      <Icon2 name="chevron-right" size={20} />
                    </Right>
                  </Button>

                </List>

              </Col>

            </Row>

          </Grid>
        </Content>
      </Container>

    );
  }
}



const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({

  text1: {
    fontFamily: fonts.Regular,
    fontSize: 20,
    color: '#3E3E40',

  },
  text3: {

    textAlign: 'center',
    color: "#F6F6F3",
    fontSize: 12,
    fontFamily: fonts.Regular,
  },

  text2: {
    marginTop: 25,
    fontFamily: fonts.Regular,
    fontSize: 10,
    color: '#212121',
    opacity: 0.25
  },
  button: {
    elevation: 2,
    borderRadius: 3,
    backgroundColor: "#F6F6F6",
    padding: 5,
    marginBottom: 10,
    marginTop: 5,
  },
  button1: {

    marginTop: 10,
    width: 100,
    backgroundColor: "#F1B50E",
    justifyContent: "center",

  },
  Icon: {
    fontSize: 18,

  },

  close: {
    margin: 5,
    position: "absolute",
    top: 40,
    //left: "24%",
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#F1B50E",
    alignItems: "center",
    justifyContent: "center",
  },
  Icon1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#F6F6F3",

  },



});
