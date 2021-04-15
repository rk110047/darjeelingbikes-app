import React from 'react';
import { View , Text , Image ,ImageBackground , Dimensions , TouchableOpacity ,StatusBar , AsyncStorage} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';


var img =require("../assets/logo.png")
const {height , width} = Dimensions.get('window')

export default class Menuscreen extends React.Component{

	state={
		data:{}
	}

	componentDidMount(){
		this.dataFtechHandler()
	}

	async dataFtechHandler(){
		let token = await AsyncStorage.getItem('token')
		let res = await axios.get('http://3.142.212.172/customer/profile/retrieve/',
		{
			header:{
				Authorization:token
			}
		})
		await this.setState({data:res.data})
	}



	async LogOut(){
	await AsyncStorage.clear(),
  	this.props.navigation.navigate('login')
	}

	render(){

		return(

			<View>
				<View style={styles.profileStyle}>
					<Image style={{width:200,height:200,borderRadius:400/2,alignSelf:"center",backgroundColor:"#fff"}}
						source={{ uri:"http://3.142.212.172"+this.state.data.photo}} />
					<View style={{flexDirection:"row",alignItems:"center",padding:5}}>
						<MaterialCommunityIcons name="account" size={22} color="#17baa1" />
						<Text style={{fontSize:20,color:"#808080",margin:5}} >
							{this.state.data.name}
						</Text>
					</View>
					<View style={{flexDirection:"row",alignItems:"center",padding:5}}>
						<MaterialCommunityIcons name="phone" size={22} color="#17baa1" />
						<Text style={{fontSize:20,color:"#808080",margin:5}} >
							{this.state.data.mobile}
						</Text>
					</View>
					<View style={{flexDirection:"row",alignItems:"center",padding:5}}>
						<MaterialCommunityIcons name="whatsapp" size={22} color="#17baa1" />
						<Text style={{fontSize:20,color:"#808080",margin:5}} >
							{this.state.data.whatsapp_number}
						</Text>
					</View>
					<View style={{flexDirection:"row",alignItems:"center",padding:5}}>
						<MaterialCommunityIcons name="email" size={22} color="#17baa1" />
						<Text style={{fontSize:20,color:"#808080",margin:5}} >
							{this.state.data.email}
						</Text>
					</View>
				</View>
				<TouchableOpacity onPress={()=>{this.LogOut()}}
					style={styles.customButtonStyle}>
					<Text style={{ fontSize: 20, color: 'red' }}>
						LogOut
					</Text>
				</TouchableOpacity>
			</View>

			)
	}
}

const styles = {

	customButtonStyle:{
		height:50,
		alignItems:"center",
		justifyContent:"flex-end"
	},
	profileStyle:{
		padding:10
	}
}