import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Form, Content, Item, Label, Button, Input } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import ST_Button from 'library/components/Button';
import InputForm from 'library/components/Input';
import R from 'res/R';
import Spinner from 'library/components/Spinner';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ChangePassword } from 'library/redux/actions/AuthActions';
import { RNToasty } from 'react-native-toasty'
import { createLoadingSelector, createErrorMessageSelector } from 'library/redux/selectors';





class changePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldpass: '',
            newpass: '',
            repass: '',
            isVisible: false
        };
    }

    _onchangepress = (values) => {
        let data = {
            new_password : values.newpass,
            old_password : values.oldpass
        }
        this.props.ChangePassword(data)
            .then(() => {
                this.props.navigation.navigate('profile')
            })
            .catch(() => {
                RNToasty.Error({
                    title: this.props.error,
                })
            })
    }
    /*
        _onchangepress() {
            const { oldpass, newpass, repass } = this.state
            if (oldpass == "A" && newpass === repass) {
                Alert.alert("", "Your password has been Changed", [{
                    text: "ok", onPress: () => this.props.navigation.navigate('Profile'),
                },])
                
    
            } else {
                Alert.alert("", "Your new password  is not equal the Re-password", [{
                    text: "ok"
                }])
            }
        }
        */

    render() {



        return (

            <Container >
                <Spinner isVisible={this.props.isLogging} />

                <Content padder>
                    <Text style={styles.text}>{strings.profile.changepassword.header}</Text>

                    <Formik
                        initialValues={{ oldpass: '', newpass: '', repass: '' }}
                        onSubmit={this._onchangepress}
                        validationSchema={Yup.object().shape({
                            oldpass: Yup.string().required(),
                            newpass: Yup.string().required().min(6,"The New Password Must be at least 6 digits"),
                            repass: Yup.string().required().oneOf([Yup.ref("newpass")],"Your Re-password is not equal the new password"),

                        })}

                    >

                        {({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid }) => (

                            <Form>
                                <Label style={styles.lable}>{strings.profile.changepassword.oldpass}</Label>
                                <InputForm error={touched.oldpass && errors.oldpass} name='oldpass' placeholder={R.strings.profile.changepassword.oldpassword} secureTextEntry itemStyle={styles.item} value={values.oldpass} onChange={setFieldValue} onTouched={setFieldTouched} />

                                <Label style={styles.lable}>{strings.profile.changepassword.newpass}</Label>
                                <InputForm error={touched.newpass && errors.newpass} name='newpass' placeholder={R.strings.profile.changepassword.newpassword} secureTextEntry itemStyle={styles.item} value={values.newpass} onChange={setFieldValue} onTouched={setFieldTouched} />

                                <Label style={styles.lable}>{strings.profile.changepassword.repass}</Label>
                                <InputForm error={touched.repass && errors.repass} name='repass' placeholder={R.strings.profile.changepassword.newpassword} secureTextEntry itemStyle={styles.item} value={values.repass}  onChange={setFieldValue} onTouched={setFieldTouched} />
                                     
                                <ST_Button title={strings.profile.changepassword.button} style={styles.button} shadow={true} titleStyle={styles.text2}
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

const loadingSelector = createLoadingSelector(['CHANGE_PASSWORD']);
const errorSelector = createErrorMessageSelector(['CHANGE_PASSWORD']);

const mapStateToProps = (state) => {
    return {
        isLogging: loadingSelector(state),
        error: errorSelector(state),
        auth : state.auth
    };
}

const mapDisptachToProps = (dispatch) => {
    return {
        ChangePassword: bindActionCreators(ChangePassword, dispatch)
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(changePassword);

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#7B1FA2",
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 30,
    },
    lable: {
        color: '#A3A3A3',
        marginBottom: 8,
        fontFamily: fonts.Regular,
        fontSize: 13
    },
    text: {
        fontFamily: fonts.Regular,
        textAlign: "center",
        justifyContent: 'center',
        margin: 35,
        fontSize: 20,
    },
    text2: {
        fontFamily: fonts.Bold,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        // margin: 20,
        color: "#F6F6F3"

    },
    item: {
        marginBottom: 10
    },
    inputalt: {
        color: "#7111A6",
        borderColor: "#7111A6",
        borderWidth: 1
    },

});
