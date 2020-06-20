/** @format */

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { FilterScreen, HomeScreen } from "./srceens";

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
	},
	Filter: {
		screen: FilterScreen,
	},

	initialRouteName: "Home",
});
export default createAppContainer(AppNavigator);
