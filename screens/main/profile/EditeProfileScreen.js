import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Form, Content,Label, } from 'native-base';
import fonts from 'res/fonts';
import ST_Button from 'library/components/Button';
import InputForm from 'library/components/Input';
import TextareaForm from 'library/components/Textarea';
import PickerForm from 'library/components/Picker';
import Spinner from 'library/components/Spinner';

import strings from 'res/strings';
import R from 'res/R';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { EditProfile } from 'library/redux/actions/AuthActions';
import { RNToasty } from 'react-native-toasty'
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';


 class editeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      university: undefined,
      collage: undefined,
      gender: undefined,
      isVisible: false


    };
  }
  

  _onupdatepress = (values) => {
    let data = {
      fullname : values.name,
      bio : values.desc,
      university : values.university,
      faculty :  values.collage,
      gender :   values.gender
    }
    this.props.EditProfile(data)
      .then(() => {
        this.props.navigation.navigate('profile')
      })
      .catch(() => {
        RNToasty.Error({
          title: this.props.error,
        })
      })
  }
  async componentDidMount(){
    // alert(this.props.auth.user.fullname)
  }

  /*_onupdatepress() {
    const { name, desc } = this.state;
    if (name != "" && desc != "") {
      Alert.alert("", "Your Info has been Updated", [{
        text: "ok", onPress: () => this.props.navigation.navigate('Profile'),
      },])

    } else {
      Alert.alert("", "Your Name  Or Description is empty", [{
        text: "ok"
      }])
    }
  }*/


  render() {
    
    

    /* handleChange = value => {
          onChange(name, value);
      };
      
      handleTouch = () => {
          setBlur(false)
          onTouched(name);
          let [isBlurred, setBlur] = useState(false)
      }*/

    return (

      <Container >
        <Spinner isVisible={this.props.isLogging} />

        <Content padder>
          <Formik
            initialValues={{ name:this.props.auth.user.fullname, desc: this.props.auth.user.bio, university: this.props.auth.user.university, collage: this.props.auth.user.faculty, gender: this.props.auth.user.gender }}
            onSubmit={this._onupdatepress}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(),
              desc: Yup.string().required(),
              university: Yup.string(),
              collage: Yup.string(),
              gender: Yup.string(),
            })}

          >

            {({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid }) => (
              <Form style={{ marginTop: 25 }}>
                <Label style={styles.lable}>{strings.profile.editeprofile.name}</Label>

                <InputForm error={touched.name && errors.name} name='name' placeholder='Your Name' itemStyle={styles.item} value={values.name} onChange={setFieldValue} onTouched={setFieldTouched} />

                <Label style={styles.lable}>{strings.profile.editeprofile.desc}</Label>
                <TextareaForm 
                  rowSpan={5}
                  bordered
                  placeholder="Description"
                  error = {touched.desc && errors.desc}
                  name='desc'  
                  onChange={setFieldValue} 
                  onTouched={setFieldTouched}
                  value={values.desc}
                />

                <Label style={styles.lable}>{strings.profile.editeprofile.university}</Label>
                  <PickerForm
                    placeholder="Select your University"
                    //placeholderStyle={{ color: "#bfc6ea" }}
                    //placeholderIconColor="#007aff"
                    name='university'
                    selectedValue={this.props.auth.user.university}
                    onChange={setFieldValue}
                    labeles={["cairo","helwan","Menoufia","Suez","Ain Shams"]}
                  />
                

                <Label style={styles.lable}>{strings.profile.editeprofile.collage}</Label>
                  <PickerForm
                    placeholder="Select your University"
                    //placeholderStyle={{ color: "#bfc6ea" }}
                    //placeholderIconColor="#007aff"
                    name='collage'
                    selectedValue={this.props.auth.user.faculty}
                    onChange={setFieldValue}
                    labeles={["Computer Science","fcih","Commerce","Sciences","Medicine"]}
                  />
              
                <Label style={styles.lable}>{strings.profile.editeprofile.gender}</Label>  
                  <PickerForm
                    placeholder="Select your University"
                    //placeholderStyle={{ color: "#bfc6ea" }}
                    //placeholderIconColor="#007aff"
                    name='gender'
                    selectedValue={values.gender}
                    onChange={setFieldValue}
                    labeles={["male","female"]}
                  />
          
                <ST_Button title={strings.profile.editeprofile.button} style={styles.button} shadow={true} titleStyle={styles.text}
                  onPress={handleSubmit}
                />

              </Form>
            )}
          </Formik>
        </Content>
      </Container>

    );
  }
}

const loadingSelector = createLoadingSelector(['POST_PROFILE']);
const errorSelector = createErrorMessageSelector(['POST_PROFILE']);

const mapStateToProps = (state) => {
  return {
    isLogging: loadingSelector(state),
    error: errorSelector(state),
    auth: state.auth
  };
}
const mapDisptachToProps = (dispatch) => {
  return {
    EditProfile: bindActionCreators(EditProfile, dispatch),
  }
}



export default connect(mapStateToProps,mapDisptachToProps)(editeProfile);

const styles = StyleSheet.create({

  button: {
    backgroundColor: "#7111A6",
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  text: {
    fontFamily: fonts.Bold,
    color: "#F6F6F3",
  },
  lable: {
    marginBottom: 8,
    fontFamily: fonts.Regular,
    color: '#909090'
  },
  foucs: {
    fontFamily: fonts.Regular,
    color: "#7111A6",
    borderColor: "#7111A6",

  },
  item: {
    marginBottom: 10,
    borderRadius: 3,
    fontFamily: fonts.Regular,
    fontSize: 13,


  },
  inputalt: {
    color: "#7111A6",
    borderColor: "#7111A6",
    borderWidth: 1,
    //fontFamily: fonts.Bold,
  },
  error: {
    fontFamily: fonts.Light,
    fontSize: 13,
    color: R.colors.inputText,
    marginTop: -20,
    marginBottom: 10
  }

});
