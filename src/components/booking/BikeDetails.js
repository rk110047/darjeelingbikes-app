import React from 'react';
import { View , Text , TouchableOpacity , ScrollView ,AsyncStorage , ActivityIndicator } from 'react-native';
import axios from 'axios';


export default class BikeDetail extends React.Component{

	state ={
		data:{},
		bike_company:"",
		bike_model_name:""
	}

	componentDidMount(){
		this.dataFetchHandler()
	}

	async dataFetchHandler(){
		const { data } = await this.props.navigation.state.params
		const { bike_company } = await this.props.navigation.state.params
		const { bike_model_name } = await this.props.navigation.state.params
		await this.setState({data:data})
		await this.setState({bike_company:bike_company})
		await this.setState({bike_model_name:bike_model_name})
	}
	render(){

		return(
			<View style={{flex:1}}>
			<View style={styles.rideStyle} >
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike No : {this.state.data.bike_registraton_number}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike Name : {this.state.bike_company}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike Model : {this.state.bike_model_name}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike CC : {this.state.data.engine_cc}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							ABS : {this.state.data.ABS}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Tubeless Tyre: {this.state.data.tubeless_tyre}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Luggage Carrier: {this.state.data.luggage_carrier}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Mobile Holder and Charger: {this.state.data.mobiler_holder_and_charger}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							color: {this.state.data.color}
						</Text>	
			</View>
			<TouchableOpacity onPress={()=>{this.props.navigation.navigate("Create Booking",{id:this.state.data.id})}}
				style={styles.buttonStyle}>
				<Text style={{fontSize:20,color:"#fff",fontWeight:"bold"}}>Book Now</Text>
			</TouchableOpacity>

</View>
			)
	}
}


const styles ={
	rideStyle:{
		backgroundColor:"#fff",
		padding:10,margin:10,
		borderRadius:5,
		elevation:2
	},
	buttonStyle:{
		alignItems:"center",
		justifyContent:"center",
		position:"absolute",
		bottom:5,
		height:40,
		margin:"5%",
		width:"90%",
		backgroundColor:"#17baa1",
		borderRadius:5
	}

}