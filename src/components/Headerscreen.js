import React from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import { Header } from 'native-base';
import icon_notification from '../assets/icon_notification.png';








export default class Headerscreen extends React.Component {

	render() {
		return (
			<Header style={styles.headerStyle}>
				<View style={styles.headerContainer}>
					<Text style={styles.headertext}>
						Good Morning
					</Text>
					<Image style={styles.headerimage} source={icon_notification} />
				</View>
			</Header>
		)
	}
}

const styles = StyleSheet.create({
	headerStyle: {
		flexDirection: 'row',
		backgroundColor: '#17baa1',
		width: "100%",
		elevation: 0
	},
	headerContainer: {
		flexDirection: 'row',
		width: '100%',
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding:"2%"
	},
	headertext: {
		fontSize: 24,
		fontWeight: 'bold',
		color:"#fff"
	},
	headerimage: {
		height: 30,
		width: 30
	}
})