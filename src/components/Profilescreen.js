import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, BackHandler } from 'react-native';
import icon_mobile from '../assets/icon_mobile.png';
// import icon_password from '../assests/icon_password.png';
import logo from '../assets/logo.png';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-simple-toast';


export default class Profilescreen extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usertextboxbordercolor: "#ddd",
            passtextboxbordercolor: "#ddd",
            isLoading: false,
            displayusericon1: "flex",
            displayusericon: "none",
            displayactivity: "none",
            displaytext: "flex",
            fontLoaded: false,
            iconcolor: "#a6a6a6"
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));

    }

    handleBackButton() {
        BackHandler.exitApp();
    }

    // async loginuser() {
    //     console.log("hiiii")
    //     if (this.state.username == "") {
    //         this.setState({ usertextboxbordercolor: "red" })
    //     } else if (this.state.password == "") {
    //         this.setState({ passtextboxbordercolor: "red" })
    //     } else {
    //         const body = {
    //             "username": this.state.username,
    //             "password": this.state.password
    //         }
    //         await fetch("http://196.29.226.28/auth/login/token/", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //             },
    //             body: JSON.stringify(body)
    //         }).then((response) => response.json())
    //             .then((res) => {
    //                 console.log(res)
    //                 if (res.token) {
    //                     Toast.show('Login Successful!');
    //                     AsyncStorage.setItem('token', "Token " + res.token);
    //                     AsyncStorage.setItem('user_detail', JSON.stringify(res) );
    //                     this.props.navigation.push('Home');
    //                 } else {
    //                     Toast.show('Invalid Credentials!');
    //                 }
    //             })
    //     }
    // }




    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: "50%", width: "100%", justifyContent: "center", alignItems: "center" }}>
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
                    <TouchableOpacity onPress={() => this.loginuser()} style={styles.login_bttn_container}>
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <Text style={{ fontSize: 20, color: '#808080' }}>
                            Don't have any account yet?{" "}
                        </Text>
                        <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate('Registerscreen')}
                        >
                            <Text style={{ fontSize: 20, color: '#000000' }}>
                                Register
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