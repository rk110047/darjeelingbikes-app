import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import icon_mobile from '../assets/icon_mobile.png';
import icon_email from '../assets/icon_email.png';
import logo from '../assets/logo.png';
// import Toast from 'react-native-simple-toast';



export default class Registerscreen extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            usertextboxbordercolor: "#ddd",
            passtextboxbordercolor: "#ddd",
            emailtextboxbordercolor: "#ddd",
            confirmpasstextboxbordercolor: "#ddd",
            isLoading: false,
            displayusericon1: "flex",
            displayusericon: "none",
            displayactivity: "none",
            displaytext: "flex",
            fontLoaded: false,
            iconcolor: "#a6a6a6"
        }
    }

    //    async registeruser(){
    //         const { username, email, password, confirm_password } = this.state
    //         const body = {
    //             "username": username,
    //             "email": email,
    //             "password": password,
    //             "confirm_password": confirm_password
    //         }
    //         await fetch("https://serene-bastion-88265.herokuapp.com/" + "http://3.142.212.172/auth/register/", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "X-Requested-With": "XMLHttpRequest"
    //             },
    //             body: JSON.stringify(body)
    //         }).then((response) => response.json())
    //             .then((res) => {
    //                 console.log(res)
    //                 if (res.token) {
    //                     Toast.show('User Registerd!');
    //                     this.props.navigation.navigate('Loginscreen')
    //                 } else {
    //                     Toast.show('Something went wrong!');
    //                 }
    //             })
    //     }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ height:"50%", width:"100%", justifyContent:"center", alignItems:"center"}}>
                    <Image style={styles.logo_style} resizeMode={'contain'} source={logo} />
                </View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column", height:"50%" }}>
                    <View style={{
                        width: "90%", borderBottomColor: this.state.usertextboxbordercolor,
                        borderBottomWidth: 2, flexDirection: "row", alignItems: "center"
                    }}>
                        <Image style={{ height: 25, width: 25, marginHorizontal: "2%" }} source={icon_mobile} />
                        <TextInput
                            placeholder={'Mobile No.'}
                            placeholderTextColor={'#a6a6a6'}
                            style={{
                                marginVertical: '2%',
                                width: '90%',
                                borderRadius: 5,
                                fontSize: 20,
                                backgroundColor: "#fff",
                            }}
                            value={this.state.username}
                            onChangeText={(username) => { this.setState({ username, usertextboxbordercolor: "#17baa1", passtextboxbordercolor: "#ddd" }) }}
                        />
                    </View>
                    <View style={{
                        width: "90%", borderBottomColor: this.state.emailtextboxbordercolor,
                        borderBottomWidth: 2,
                        marginTop: 30, flexDirection: "row", alignItems: "center"
                    }}>
                        <Image style={{ height: 25, width: 25, marginHorizontal: "2%" }} source={icon_email} />
                        <TextInput
                            placeholder={'Email'}
                            placeholderTextColor={'#a6a6a6'}
                            secureTextEntry={true}
                            style={{
                                marginBottom: '2%',
                                width: '90%',
                                fontSize: 20,
                                backgroundColor: "#fff",
                            }}
                            // value={this.state.password}
                            onChangeText={(email) => { this.setState({ email, emailtextboxbordercolor: "#17baa1", usertextboxbordercolor: "#ddd", passtextboxbordercolor: "#ddd", confirmpasstextboxbordercolor: "#ddd" }) }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.registeruser()} style={styles.login_bttn_container}>
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <Text style={{ fontSize: 20, color: '#808080' }}>
                            Already have an account?{" "}
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                            <Text style={{ fontSize: 20, color: '#000000' }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: "100%",
        flex: 1
    },
    logo_style: {
        width: "50%"
    },
    login_bttn_container: {
        height: 45,
        width: "90%",
        backgroundColor: "#17baa1",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        borderRadius: 5
    }
});