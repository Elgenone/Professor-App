import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Stylesheet, Image, View} from 'react-native';
import R from 'res/R';
import fonts from 'res/fonts';
import ST_Image from 'library/components/Image';
import ST_Button from 'library/components/Button';
import InputForm from 'library/components/Input';
import Spinner from 'library/components/Spinner';
import AsyncStorage from '@react-native-community/async-storage';

//import CheckAlert from "react-native-awesome-alert";
//import Dialog from "react-native-dialog";

import { Container,
   Header,
   Title,
   Button,
   Left,
   Right,
   Content,
   Text,
   Form,
   Input,
   Label,
   Item,
   CheckBox,
   Body
   } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from 'library/redux/actions/AuthActions';
import { getUser } from 'library/redux/actions/AuthActions';
import { RNToasty } from 'react-native-toasty'
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';

class LoginScreen extends Component {
  state = {
    isVisible: false,
    isGuest:false
  }
  
  _onSubmit = (values) => {
    this.props.login(values.email, values.password)
    .then(() => {
      this.props.navigation.navigate('home')
    })
    .catch(() => {
      RNToasty.Error({
        title: this.props.error,
      })
    })
  }
  async componentDidMount(){

    this.props.getUser()
    .then(()=>{
      if(this.props.auth.user){
        this.props.navigation.navigate('home')
      } else {
        this.setState({
          isGuest:true
        })     
       }
    })

  }
  render() {
    if(this.state.isGuest){
      return (
        <Container style={styles.container}>
        <Content>
          <Grid>
           
           <Spinner isVisible = {this.props.isLogging} />
           <Row size={35} >
              <Col style={styles.logoCarrier}>
                <ST_Image style={styles.logo} source= { R.images.logo } />
              </Col>
           </Row>
           <Row size={50} >
              <Col>
                
                  <Formik
                  initialValues = {{email: '', password: ''}}
                  onSubmit = {this._onSubmit}
                  validationSchema = {Yup.object().shape({
                    email: Yup.string().email().required(),
                    password: Yup.string().min(6).required(),
                  })}
                  
                  >
                    {({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid }) => (
                    <Form style = {{paddingLeft: 15, paddingRight: 15}}>
                      <Text style={styles.headerText}>{ R.strings.login.header}</Text>
                      <Text style={{
                        borderBottomWidth: 1,
                        borderColor: '#EAEEF1',
                        marginBottom: 30,
                        marginTop: -15
                      }}></Text>
                      <Label style={styles.formHeader}>{R.strings.login.email}</Label>
                      <InputForm error = {touched.email && errors.email} name = 'email' placeholder = {R.strings.login.emailholder} itemStyle={styles.item} value={values.email} onChange={setFieldValue} onTouched = {setFieldTouched} />
                      <Label style={styles.formHeader}>{R.strings.login.password}</Label>
                      <InputForm error = {touched.password && errors.password} name = 'password' placeholder = {R.strings.login.passwordholder} secureTextEntry itemStyle={styles.item} value={values.password} onChange={setFieldValue} onTouched = {setFieldTouched} />
                      <ST_Button title= {R.strings.login.loginBtn} style={styles.signIn} shadow={true}
                        onPress={handleSubmit}
                        />
                    </Form>
                    )}
                  </Formik>
                  
                  
              </Col>
            </Row>
           <Row size={15}>
              <Col>
                  <Text style={styles.forgetText} onPress={() => this.props.navigation.navigate('forgot')} >
                 {R.strings.login.forgot}</Text>
              </Col>
           </Row>

          </Grid>
          </Content>
        </Container>
    );
    }else{
      return (
        <Spinner isVisible = {this.props.isLogging} />
        
      )
    }

  }
}
const loadingSelector = createLoadingSelector(['POST_LOGIN']);
const errorSelector = createErrorMessageSelector(['POST_LOGIN']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),
    auth:state.auth
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    getUser: bindActionCreators(getUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(LoginScreen);

const styles = {
  logoCarrier: {
    backgroundColor: R.colors.main,
    /*width:202,
    height:213,*/
    marginHorizontal: 81,
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'cover',
    marginVertical: 45,
  },
  headerText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: R.colors.header,
    fontFamily: fonts.SemiBold, 
    marginVertical: 10,
    
  },
  signIn: {
    backgroundColor: R.colors.button,
    width: '98%',
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  formHeader: {
    color: R.colors.login.email_password,
    fontFamily: fonts.Regular, 
    fontSize: 13,
    marginBottom: 8,
  },
  checkBox: {
    width: 17,
    height:19,
    marginVertical: '6%',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: R.colors.login.logoCarrier,
  },
  rememberText: {
    fontFamily: fonts.Regular,
    fontSize: 12,
    color: '#6C6C6F',
    marginVertical: '2%',
    marginLeft: '5%',
  },
  forgetText: {
    fontFamily: fonts.Regular,
    fontSize: 12,
    color: '#6C6C6F',
    textAlign: 'center',
    //marginTop: -10
    marginBottom: 12
    
  },
  inputs: {
    color: R.colors.login.inputs,
    fontSize: 12.89,
    fontFamily: fonts.Light,
    textAlign: 'left',
    borderWidth: 1,
    width: 295,
    height: 37,
    borderRadius: 3,
    borderColor: R.colors.login.inputBorder,
    marginLeft:'9%',
    marginTop:'3%',
    marginBottom:'4%',

  },
  alerts: {
    color: '#6200EE',
  },
  item: {
    marginBottom: 20
  }
};

