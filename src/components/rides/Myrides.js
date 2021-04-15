import React from 'react';
import { View , Text , TouchableOpacity , ScrollView ,AsyncStorage , ActivityIndicator } from 'react-native';
import axios from 'axios';


export default class Myride extends React.Component{

	state={
		status:"ongoing",
		loading:true,
		data:[]
	}


	componentDidMount(){
		this.ridefetchHandler()
	}


	async ridefetchHandler(){
		let token = await AsyncStorage.getItem("token")
		let res = await axios.get("http://3.142.212.172/customer/rides/?status="+this.state.status,
		{
			headers:{
				Authorization: token
			}
		})
		this.setState({data:res.data})
		this.setState({loading:false})
	}

	async onPress1(){
			await this.setState({loading:true})
			await this.setState({status:"ongoing"})
			await this.ridefetchHandler()
	}

	async onPress2(){
			await this.setState({loading:true})
			await this.setState({status:"completed"})
			await this.ridefetchHandler()
	}

	async onPress3(){
			await this.setState({loading:true})
			await this.setState({status:"canceled"})
			await this.ridefetchHandler()
	}

	async onPress4(){
			await this.setState({loading:true})
			await this.setState({status:"upcoming"})
			await this.ridefetchHandler()
	}


	dataMapHander =()=>{
		return this.state.data.map((t,key)=>{
			return(
					<View style={styles.rideStyle} key={key}>
						<Text style={{fontSize:20,color:"#808080"}}>
							Bike No : {t.bike.bike_registraton_number} ( {t.bike.bike_company.name} )
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Ride status : {t.ride_status}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							Start Date : {t.start_date}
						</Text>
						<Text style={{fontSize:20,color:"#808080"}}>
							End Date : {t.end_date}
						</Text>
					</View>
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
							<Text style={{ fontSize: 20, color: '#fff' }}>OnGoing</Text>
						</TouchableOpacity >
						<TouchableOpacity onPress={()=>(this.onPress2())}
							style={styles.buttonStyle2}>
							<Text style={{ fontSize: 20, color: '#fff' }}>Completed</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>(this.onPress3())}
							style={styles.buttonStyle3}>
							<Text style={{ fontSize: 20, color: '#fff' }}>Canceled</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>(this.onPress4())}
							style={styles.buttonStyle4}>
							<Text style={{ fontSize: 20, color: '#fff' }}>Upcoming</Text>
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
		borderRadius:5,
		elevation:2

	},
	buttonStyle4:{
		alignItems:"center",
		justifyContent:"center",
		height:40,
		backgroundColor:"pink",
		padding:10,
		margin:10,
		borderRadius:5,
		elevation:2

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