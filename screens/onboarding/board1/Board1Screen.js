import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {
  Button,
  Container,
  Grid,
  Row,
  Col,
  Content,
  Text
} from 'native-base';
import R from 'res/R';
import fonts from 'res/fonts';
import Img from 'library/components/Image';

export default class Board1Screen extends Component {
  onSkip = () => {
    this.props.navigation.navigate('login')
  }

  render() {
    const { skip, board1 } = R.strings.onboarding;
    return (
      <Container >
        <Grid>
          <Col>
              <Content>
                <Text style={styles.skip} onPress = {this.onSkip}>{skip}</Text>
                <Text style={styles.header}>{board1.header}</Text>

                <Img url = { R.images.board1 } />

                <Text style={styles.subheader}>
                    { board1.subheader }
                </Text>

                <Text style={styles.text}>
                    { board1.text }
                </Text>
              </Content>
            
          </Col>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  skip: {
    fontFamily: fonts.Bold,
    color: '#FFC107',
    alignSelf: 'flex-end',
    marginRight: 19,
    fontSize: 16,
    marginBottom: 13,
    marginTop: 15
  },
  header: { 
    fontFamily: fonts.Regular,
    color: '#7B1FA2',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25
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
    lineHeight: 30,
  }
});
