import React from 'react';
import { View , Text , TouchableOpacity , ScrollView ,AsyncStorage , ActivityIndicator } from 'react-native';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';



export default class BookingCreate extends React.Component{

	state={
		    "ride_status": "ongoing",
		    "start_date": null,
		    "end_date": null,
		    "canceled": false,
		    "review": "abc",
		    "bike": null,
		    date:new Date(),
		    mode:'date',
		    show:false,
		    show2:false,
		}

	onChange = (event, selectedDate) => {
	    this.setState({show:false})
	    const currentDate = selectedDate || this.state.date;
	    this.setState({date:currentDate})
	    this.setState({delivery_schedule:`Date ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()} Time ${currentDate.getHours()}:${currentDate.getMinutes()}`})
	    this.setState({start_date:` ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`})
	    this.setState({show:false})

	  };

	  onChange2 = (event, selectedDate) => {
	    this.setState({show:false})
	    const currentDate = selectedDate || this.state.date;
	    this.setState({date:currentDate})
	    this.setState({delivery_schedule:`Date ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()} Time ${currentDate.getHours()}:${currentDate.getMinutes()}`})
	    this.setState({end_date:` ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`})
	    this.setState({show2:false})

	  };

	  showMode = (currentMode) => {
	    var self = this;
	    this.setState({show:true})
	    this.setState({mode:currentMode})
	    
	  };

	  showDatepicker(){
	    var self = this;
	    this.setState({show:true})
	    self.setState({mode:'date'})
	  };

	  showDatepicker2(){
	    var self = this;
	    this.setState({show2:true})
	    self.setState({mode:'date'})
	  };

    async bookBikeHandler(){
    	const { id } = await this.props.navigation.state.params
    	let token = await AsyncStorage.getItem("token")
    	console.log(token)
    	let res  = await axios.post("http://3.142.212.172/customer/rides-create/",
    	{
		    "ride_status": this.state.ride_status,
		    "start_date": this.state.start_date,
		    "end_date": this.state.end_date,
		    "canceled": false,
		    "review": "abc",
		    "bike": id
		},
		{
			headers:{
				Authorization:token
		}
		}
    		)
    	console.warrn(res.data)
    }

	render(){
		this.showDatepicker = this.showDatepicker.bind(this);
		return(
			<View style={{flex:1}}>
			<View>
				<TouchableOpacity style={{height:40,margin:10}}
					onPress={()=>{this.showDatepicker()}}>
					<Text style={{fontSize:20}}>Start Date</Text>
					<Text style={{fontSize:20,height:30,backgroundColor:"#fff",elevation:2}}>{this.state.start_date}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{height:40,margin:10}}
					onPress={()=>{this.showDatepicker2()}}>
					<Text style={{fontSize:20}}>End Date</Text>
					<Text style={{fontSize:20,height:30,backgroundColor:"#fff",elevation:2}}>{this.state.end_date}</Text>
				</TouchableOpacity>


				{this.state.show && (
					        <DateTimePicker
					          testID="dateTimePicker"
					          value={this.state.date}
					          mode={this.state.mode}
					          is24Hour={true}
					          display="default"
					          onChange={this.onChange}/>)
				}
				{this.state.show2 && (
					        <DateTimePicker
					          testID="dateTimePicker"
					          value={this.state.date}
					          mode={this.state.mode}
					          is24Hour={true}
					          display="default"
					          onChange={this.onChange2}/>)
				}
			</View>
			<TouchableOpacity onPress={()=>{this.bookBikeHandler()}}
				style={styles.buttonStyle}>
				<Text style={{fontSize:20,color:"#fff",fontWeight:"bold"}}>Book</Text>
			</TouchableOpacity>
			</View>

			)
	}


}


const styles={
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