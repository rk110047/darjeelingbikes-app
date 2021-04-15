import React from 'react';
import {View , Button ,Text ,Dimensions , ImageBackground , ScrollView , TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Linking from 'expo-linking';

const {height , width} = Dimensions.get('window')


var img =require("../assets/logo.png")
export default class Homescreen extends React.Component{
    


    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#eee"}} >
                <ImageBackground style={{height:height-300,width:width}} source={img}>
                </ImageBackground>
                <View style={styles.navigatorStyle} >
                    <TouchableOpacity onPress={()=>{}}
                        style={styles.iconsStyle}>
                        <MaterialCommunityIcons onPress={()=>{}}
                            name="home" size={25} color="#17baa1" />
                    </TouchableOpacity>
                    <View style={{width:1,backgroundColor:"#fff"}}>
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Myrides')}}
                        style={styles.iconsStyle}>
                        <MaterialCommunityIcons onPress={()=>{this.props.navigation.navigate('Myrides')}}
                            name="motorbike" size={25} color="#17baa1" />
                    </TouchableOpacity>
                    <View style={{width:1,backgroundColor:"#fff"}}>
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Bikes')}}
                        style={styles.iconsStyle}>
                        <MaterialCommunityIcons onPress={()=>{this.props.navigation.navigate('Bikes')}}
                            name="plus" size={25} color="#17baa1" />
                    </TouchableOpacity>
                    <View style={{width:1,backgroundColor:"#fff"}}>
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}}
                        style={styles.iconsStyle}>
                        <MaterialCommunityIcons onPress={()=>{this.props.navigation.navigate('Profile')}}
                            name="account" size={25} color="#17baa1" />
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
}



const styles = {
    
    navigatorStyle:{
        margin:10,
        borderRadius:400/2,
        position:"absolute",
        justifyContent:"center",
        bottom:10,
        backgroundColor:"#fff",
        height:60,
        width:width-20,
        flexDirection:"row",
        elevation:2

    },
    iconsStyle:{
        width:(width-20)/4,
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"center"
    }
}