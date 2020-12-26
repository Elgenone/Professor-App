import React, { Component } from 'react';
import { Alert, Text, StyleSheet } from 'react-native';
import { Container, Form, Content, Item, Row, Textarea, Button, Input, Picker } from 'native-base';
import fonts from 'res/fonts';
import ST_Button from 'library/components/Button';
import InputForm from 'library/components/Input';
import R from 'res/R';

import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RNToasty } from 'react-native-toasty'

import { reset } from 'library/redux/actions/AuthActions';
import Spinner from 'library/components/Spinner';

class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }



  _onsendpress(values) {
    this.props.reset(values.email)
      .then(() => {
        Alert.alert("", "Your Email has been Send Check your Inbox", [{
          text: "ok", //onPress: () => this.props.navigation.navigate('Profile'),
        },])

      })
      .catch(() => {
        RNToasty.Error({
          title: this.props.error,
        })
      })

  }

  render() {
    return (
      <Container >
        <Spinner isVisible={this.props.isLogging} />
        <Content padder>
          <Row style={[styles.row, { marginTop: 35 }]}>
            <Text style={styles.text}> {R.strings.forgot.header} </Text>
          </Row>
          <Row style={styles.row}>
            <Text style={styles.text2}>{R.strings.forgot.subHeader}</Text>
          </Row>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={this._onSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
            })}

          >
            {({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid }) => (
              <Form>
                <InputForm error={touched.email && errors.email} name='email' placeholder={R.strings.login.emailholder} itemStyle={styles.item} value={values.email} onChange={setFieldValue} onTouched={setFieldTouched} />

                <ST_Button title={R.strings.forgot.sendBtn} style={styles.button} shadow={true}
                  onPress={this._onsendpress.bind(this)}
                />

              </Form>
            )}
          </Formik>
        </Content >
      </Container >
    );
  }
}

const loadingSelector = createLoadingSelector(['POST_RESET']);
const errorSelector = createErrorMessageSelector(['POST_RESET']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),
    reset: state.reset,
    // user:state.login.user
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    reset: bindActionCreators(reset, dispatch)
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(ForgotScreen);

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    justifyContent: 'center',
    textAlign: "center",
    marginBottom: 20
  },
  text: {
    color: "#7111A6",
    fontFamily: fonts.Bold,
    fontSize: 32,
    alignItems: "center",
    justifyContent: 'center',
    textAlign: "center",
  },
  text2: {
    fontFamily: fonts.Regular,
    fontSize: 19,
    alignItems: "center",
    justifyContent: 'center',
    textAlign: "center",
  },
  item: {
    marginBottom: 30,
    marginTop: 15,
    //fontFamily: fonts.Light,

  },

  button: {
    width: "98%",
    backgroundColor: R.colors.button,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,
  },

})
