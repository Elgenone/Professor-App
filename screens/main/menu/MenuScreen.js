import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Thumbnail, Text, Content, Body, Row, Col, Left, Right, Button, List, ListItem, Grid } from 'native-base';
import image from 'res/images';
import fonts from 'res/fonts';
import strings from 'res/strings';
import color from 'res/colors';

const win = Dimensions.get('window');

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#660099" }}>
        <Content>
          <Grid style = {{height: win.height}}>
            <Row size = {30} style={{backgroundColor:"#5C008979", alignItems: 'center'}}>
            <Col style = {{alignItems: 'center', justifyContent: 'center'}} onPress = {() => {this.props.navigation.navigate("profile")}}>
                  <Thumbnail source={image.me} />
                  <Text style={styles.text1}>{strings.menu.name}</Text>
                  <Text style={styles.text2}>{strings.menu.college}</Text>
                  
              </Col>
            </Row>
            <Row size = {60}>
              <Col>
                  <List style = {{marginLeft: 15, paddingTop: 30}}>
                  <ListItem
                    button={true}
                    style={[styles.row3, {
                      backgroundColor: '#FFC107',
                      borderRadius: 25,
                    }]}
                    onPress={() => this.props.navigation.navigate("home")}
                  >
                    <Left>
                      <Text style={[styles.text3, {
                        color: '#660099'
                      }]}>{strings.menu.home}</Text>
                    </Left>
                    <Right
                    ><Icon name="home" size={20} style={{color: '#FFFFFF'}} />
                    </Right>
                  </ListItem>
                  <ListItem
                    button={true}
                    style={styles.row3}
                    onPress={() => this.props.navigation.navigate("ls")}
                  >
                    <Left>
                      <Text style={styles.text3}>{strings.menu.ls}</Text>
                    </Left>
                    <Right>
                      <Icon name="home" size={20} style={styles.icon} />
                    </Right>
                  </ListItem>
                  <ListItem
                    button={true}
                    style={styles.row3}
                    onPress={() => this.props.navigation.navigate("subject")}
                  >
                    <Left>
                      <Text style={styles.text3}>{strings.menu.supjects}</Text>
                    </Left>
                    <Right>
                      <Icon name="home" size={20} style={styles.icon} />
                    </Right>
                  </ListItem>
                  <ListItem
                    button={true}
                    style={styles.row3}
                    onPress={() => this.props.navigation.navigate("circle")}
                  >
                    <Left>
                      <Text style={styles.text3}>{strings.menu.circles}</Text>
                    </Left>
                    <Right>
                      <Icon name="home" size={20} style={styles.icon} />
                    </Right>
                  </ListItem>
                  <ListItem
                    button={true}
                    style={styles.row3}
                    onPress={() => this.props.navigation.navigate("addCircle")}
                  >
                    <Left><Text style={styles.text3}>{strings.menu.addcircle}</Text></Left>
                    <Right><Icon name="home" size={20} style={styles.icon} /></Right>
                  </ListItem>
                  <ListItem
                    button={true}
                    onPress={() => this.props.navigation.navigate("home")}
                    style={styles.row3}>
                    <Left>
                      <Text style={styles.text3}>{strings.menu.settings}</Text>
                    </Left>
                    <Right>
                      <Icon name="home" size={20} style={styles.icon} />
                    </Right>
                  </ListItem>
                </List>
              </Col>
            </Row>
            <Row size = {10} style = {{alignItems: 'center',marginTop:90}}>
              <Col style = {{alignItems: 'center'}}>
                <Image source={image.menu_logo} style={{ resizeMode: 'cover' }} />
                <Text style={styles.text4}>V 1.0.0</Text>
              </Col>
            </Row>
          </Grid>
          
          {/* <Row>
            
          </Row>

          <Row style={styles.row2}>
            <Image source={image.MenuLogo} style={{ resizeMode: 'cover' }} />
          </Row>
          <Row style={styles.postion}>
            
          </Row> */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  postion: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems: "center",
  },
  row1: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 60,
    marginBottom: 10,
  },
  row2: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 80,
  },
  row3: {
    borderBottomWidth: 0,
    width: "90%",
    marginLeft: 0,
    paddingLeft: 15,

    
  },
  activerow: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor:"#660099",
    borderRadius:20,
    backgroundColor:"#FFC107",
    //marginRight:20,
    width:"90%"
  },
  activetext: {
    fontFamily: fonts.Regular,
    color: "#660099",
    fontSize: 14.55,
    marginLeft:15,
  },
  activeicon: {
    color: "#FFFFFF",
  },
  text1: {
    fontFamily: fonts.SemiBold,
    marginBottom: 7,
    color: "#FFFFFF",
    fontSize: 13,
  },
  text2: {
    fontFamily: fonts.Regular,
    color: "#FFFFFF",
    opacity: 0.8,
    fontSize: 11,
  },
  text3: {
    fontFamily: fonts.Regular,
    color: "#D8DBE8",
    fontSize: 14.55,
  },
  icon: {
    color: "#D8DBE8",
    opacity: 0.5
  },
  text4: {
    fontFamily: fonts.Regular,
    marginBottom: 10,
    color: "#FFFFFF",
    fontSize: 13,
  },

})