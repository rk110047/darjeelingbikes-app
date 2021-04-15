import React from 'react';
import { View,  StyleSheet, Image, ActivityIndicator ,AsyncStorage } from 'react-native';
import logo from '../assets/logo.png';
// import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Splashscreen extends React.Component {

    constructor() {
        super();
        this.state = {
            token: "",
            loading: true
          }
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        token == null ? this.props.navigation.navigate('login') :
        this.props.navigation.navigate('Home')
      }
    

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo_style} resizeMode={'contain'}  source={logo}/>
                <ActivityIndicator size="large" color="black" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%",
        width:"100%"
    },
    logo_style: {
        width:"80%"
    }
});