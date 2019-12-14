import React, { useState } from 'react';
import { View, Button } from 'react-native';

import { TextInput } from 'react-native';

import DatePicker from 'react-native-datepicker';

export default function InputCard(props) {
	const [value, onChangeText] = useState('Useless Placeholder');
	const [date, setDate] = useState('15-05-2018');

	return (
		<View>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => onChangeText(text)}
				value={value}
			/>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => onChangeText(text)}
				value={value}
			/>

			<DatePicker
				style={{ width: 200 }}
				date={date} //initial date from state
				mode="date" //The enum of date, datetime and time
				placeholder="select date"
				format="DD-MM-YYYY"
				minDate="01-01-2016"
				maxDate="01-01-2019"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				customStyles={{
					dateIcon: {
						position: 'absolute',
						left: 0,
						top: 4,
						marginLeft: 0,
					},
					dateInput: {
						marginLeft: 36,
					},
				}}
				onDateChange={date => {
					setDate(date);
				}}
			/>

			<Button title="Go" />
		</View>
	);
}
