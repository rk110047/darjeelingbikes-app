import React from 'react';
import { View , Text , TouchableOpacity , ScrollView ,AsyncStorage , ActivityIndicator } from 'react-native';
import axios from 'axios';


export default class Bikes extends React.Component{

	state={
		status:"ready-bikes/",
		loading:true,
		data:[]
	}


	componentDidMount(){
		this.ridefetchHandler()
	}


	async ridefetchHandler(){
		let token = await AsyncStorage.getItem("token")
		let res = await axios.get("http://3.142.212.172/vendor/"+this.state.status)
		this.setState({data:res.data})
		this.setState({loading:false})
	}

	async onPress1(){
			await this.setState({loading:true})
			await this.setState({status:"ready-bikes"})
			await this.ridefetchHandler()
	}

	async onPress2(){
			await this.setState({loading:true})
			await this.setState({status:"all-bikes/"})
			await this.ridefetchHandler()
	}


	dataMapHander =()=>{
		return this.state.data.map((t,key)=>{
			return(
					<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Bike Detail',{data:t,bike_company:t.bike_company.name,bike_model_name:t.bike_model_name.name})}}
						style={styles.rideStyle} key={key}>
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike No : {t.bike_registraton_number}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike Company : {t.bike_company.name}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike Model : {t.bike_model_name.name} ({t.engine_cc})
						</Text>
					</TouchableOpacity>
				)
		})
	}


	render(){
		return(
				<View style={{flex:1}}>
				<View>
					<ScrollView horizontal={true} style={{height:60}}>
						<TouchableOpacity  onPress={()=>(this.onPress1())}
							style={styles.buttonStyle1}>
							<Text style={{ fontSize: 20, color: '#fff' }}>Ready Bikes</Text>
						</TouchableOpacity >
						<TouchableOpacity onPress={()=>(this.onPress2())}
							style={styles.buttonStyle2}>
							<Text style={{ fontSize: 20, color: '#fff' }}>All Bikes</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
					{ this.state.loading ? 
						<View style={styles.activityStyle}>
							<ActivityIndicator size="large" color="black" />
						</View> :
						<ScrollView style={{}}>
							{this.dataMapHander()}
						</ScrollView>
					}

				</View>

			)
	}
}

const styles = {
	buttonStyle1:{
		alignItems:"center",
		justifyContent:"center",
		height:40,
		backgroundColor:"orange",
		padding:10,
		margin:10,
		borderRadius:5,
		elevation:2
	},
	buttonStyle2:{
		alignItems:"center",
		justifyContent:"center",
		height:40,
		backgroundColor:"#17baa1",
		padding:10,
		margin:10,
		borderRadius:5,
		elevation:2
	},
	buttonStyle3:{
		alignItems:"center",
		justifyContent:"center",
		height:40,
		backgroundColor:"red",
		padding:10,
		margin:10,
		borderRadius:5
	},
	buttonStyle4:{
		alignItems:"center",
		justifyContent:"center",
		height:40,
		backgroundColor:"pink",
		padding:10,
		margin:10,
		borderRadius:5
	},
	activityStyle:{
		alignItems:"center",
		justifyContent:"center",
		flex:1
	},
	rideStyle:{
		backgroundColor:"#fff",
		padding:10,margin:10,
		borderRadius:5,
		elevation:2
	}
}