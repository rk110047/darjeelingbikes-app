import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loginscreen from './components/Loginscreen';
import Registerscreen from './components/Registerscreen';
import Splashscreen from './components/Splashscreen';
import Homescreen from './components/Homescreen';
import Menuscreen from './components/Menu';
import Myrides from './components/rides/Myrides';
import Bikes from './components/booking/Bikes';
import BikeDetail from './components/booking/BikeDetails';
import BookingCreate from './components/booking/BookingCreate'



const BikesNavigator = createStackNavigator(
{
    Bikes:Bikes,
    "Bike Detail":BikeDetail,
    "Create Booking" : BookingCreate
})


const MyridesNavigator = createStackNavigator({
  "My ride":Myrides,
})

const MenuNavigator = createStackNavigator({
    Profile:Menuscreen,
},
);

const HomeNavigator = createStackNavigator({
    Home: Homescreen,
    Menu:MenuNavigator,
    Myrides:MyridesNavigator,
    Bikes:BikesNavigator
},
{
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
  });

const AuthNavigator = createStackNavigator({
    login: Loginscreen,
    registerscreen:Registerscreen
},
{
    initialRouteName: 'login',
    header: null,
    headerMode: 'none'
  });

const MainNavigator = createSwitchNavigator(
    {
      AppStart:Splashscreen, 
        Auth: AuthNavigator,
        Home:HomeNavigator
    }, 
    {
        initialRouteName: 'AppStart'
    }
);

export default createAppContainer(MainNavigator);