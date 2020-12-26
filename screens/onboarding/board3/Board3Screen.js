import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import {
  Button,
  Container,
  Grid,
  Row,
  Col,
  Content,
  StyleProvider
} from 'native-base';
import R from 'res/R';
import fonts from 'res/fonts';
import Img from 'library/components/Image';
import Btn from 'library/components/Button';

export default class Board3Screen extends Component {
  
  render() {
    const { skip, board3 } = R.strings.onboarding
    return (
      <Container >
        <Grid>
          <Col>
              <Content>
                <Text style={styles.header}>{board3.header}</Text>

                <Img url = { R.images.board3 } />

                <Text style={styles.subheader}>
                    { board3.subheader }
                </Text>

                <Text style={styles.text}>
                    { board3.text }
                </Text>

                
                <Btn title = "SIGN IN" shadow = { true } style={styles.signin} titleStyle = {styles.signinText} onPress = {() => 
                  this.props.navigation.navigate('login')
                } />
                
              </Content>
            
          </Col>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
  header: { 
    fontFamily: fonts.Regular,
    color: '#7B1FA2',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25,
    marginTop: 25
  },
  subheader: {
    fontFamily: fonts.Bold,
    color: '#7B1FA2',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 23
  },
  text: {
    fontFamily: fonts.Regular,
    color: '#3E3E40',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    padding: 9,
    lineHeight: 30
  },
  signin: {
    backgroundColor: '#7B1FA2',
    width: '40%',
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  signinText: {
    fontSize: 20
  }
});
