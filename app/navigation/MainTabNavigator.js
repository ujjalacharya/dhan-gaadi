import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import InfoScreen from '../screens/InfoScreen';
import HelpScreen from '../screens/HelpScreen';

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
//   headerStyle: {
//     backgroundColor: "#001529"
//    }
// });

const config = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#001529',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	},
};

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused, tintColor }) => (
		<TabBarIcon
			focused={focused}
      name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
      tintColor={{tintColor}}
		/>
	),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
	{
		Links: LinksScreen,
	},
	config
);

LinksStack.navigationOptions = {
	tabBarLabel: 'Profile',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-man' : 'md-man'} />,
};

LinksStack.path = '';

const InfoStack = createStackNavigator(
	{
		Info: InfoScreen,
	},
	config
);

InfoStack.navigationOptions = {
	tabBarLabel: 'Info',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information' : 'md-information'} />
	),
};

InfoStack.path = '';

const HelpStack = createStackNavigator(
	{
		Help: HelpScreen,
	},
	config
);

HelpStack.navigationOptions = {
	tabBarLabel: 'Help',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} />,
};

HelpStack.path = '';

const tabNavigator = createBottomTabNavigator(
	{
		HomeStack,
		LinksStack,
		InfoStack,
		HelpStack,
	},
	{
		tabBarOptions: {
      activeTintColor: '#001529',
			// labelStyle: {
			// 	fontSize: 12,
			// },
			// style: {
			// 	backgroundColor: '#001529',
			// },
		},
	}
);

tabNavigator.path = '';

export default tabNavigator;
