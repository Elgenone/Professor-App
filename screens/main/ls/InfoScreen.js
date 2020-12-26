import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Form, Content, Item,Picker, Label, Button, Input } from 'native-base';
import fonts from 'res/fonts';
import strings from 'res/strings';
import color from 'res/colors';
import InputForm from 'library/components/Input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class InfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Location:'',
            selected: this.props.home.subjects[0]._id,
            focusedInput: null,
        };
    }

    async componentDidUpdate(){
        // alert(this.props.navigation.state.params.data.to)
        if(this.state.selected && this.state.Location){
            this.props.navigation.state.params.info = {
                subject_id : this.state.selected ,
                location : this.state.Location 
            }
        }
    }

    async componentDidMount(){
    }

    onFocusChange = (inputName) => {
        this.setState({ focusedInput: inputName });
    }

    onBlurChange = (inputName) => {
        const { focusedInput } = this.state
        if (focusedInput === inputName) {
            this.setState({
                focusedInput: null
            })
        }

    }

    getSubjects(){
        let list = this.props.home.subjects.map(subject=>{
            return <Picker.Item label={subject.name} value={subject._id} />            
        })
        
        return list
    }

    onsupjectChange(value) {
        this.setState({
          selected: value
        });
      }

    render() {



        return (

            <Content padder>
                <Form>
                        <Label style={styles.label}>{strings.ls.info.subject}</Label>
                        <Item  picker style={styles.item}>
                            <Picker
                            ref={(picker) => {
                                this.picker = picker;
                            }}
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{  opacity: 0.6}}
                                placeholder={strings.ls.info.subjectplaceholder}
                                //placeholderStyle={{ color: "#bfc6ea" }}
                                //placeholderIconColor="#007aff"
                                selectedValue={this.state.selected}
                                onValueChange={this.onsupjectChange.bind(this)}
                            /* onFocus={() => this.onFocusChange("input3")}
                             onBlur={() => this.onBlurChange("input3")}
                             style={(this.state.focusedInput === "input3") ? [styles.inputalt, styles.item] : styles.item}
                             pickerStyleType={styles.inputalt}
                             itemStyle={styles.inputalt} */
                            >
                                {
                                    this.getSubjects()
                                }

                            </Picker>
                        </Item>
                        <Label style={styles.label}>{strings.ls.info.location}</Label>
                        <InputForm placeholder = {strings.ls.info.locationplaceholder} itemStyle={styles.item} value={this.state.Location} onChangeText={text => this.setState({ Location: text })} />
                        

                    </Form>
            </Content>

        );
    }
}

const mapStateToProps = (state) => {
    return {
      home: state.home,
      auth: state.auth
    };
  }
  
  
  
  export default connect(mapStateToProps)(InfoScreen);

const styles = StyleSheet.create({

    text: {
        fontFamily: fonts.Bold,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        margin: 20
    },
    label:{
        fontFamily: fonts.Regular,
        marginBottom:10,
        color:"#969696",
        fontSize:12,
    },
    item: {
        marginBottom: 10
    },
    inputalt: {
        color: color.main,
        borderColor: color.main,
        borderWidth: 1
    },

});
