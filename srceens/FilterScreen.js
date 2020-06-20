/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

import {
	StyleSheet,
	Text,
	View,
	SectionList,
	TouchableOpacity,
} from "react-native";

import styled, { withTheme } from "styled-components/native";

const FilterScreen = ({ navigation }) => {
	const [data, setData] = useState(null);
	const [pressed, setPressed] = useState(false);
	useEffect(() => {
		axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
			.then(({ data }) => {
				setData(data.drinks);
			});
	}, []);

	return (
		<View>
			{data && (
				<View>
					{data.map((data) => (
						<GroupContainer>
							<GroupTitle>{data.strCategory}</GroupTitle>
							<TouchableOpacity>
								<AntDesign name="check" size={24} color="black" />
							</TouchableOpacity>
						</GroupContainer>
					))}
				</View>
			)}

			<ButtonApply onPress={navigation.navigate.bind(this, "Home")}>
				<Text style={{ color: "white" }}> Apply</Text>
			</ButtonApply>
		</View>
	);
};
FilterScreen.navigationOptions = {
	title: "Filters",
};
const styles = StyleSheet.create({
	buttonStyle: {
		color: "red",
		marginTop: 20,
		padding: 20,
		backgroundColor: "green",
	},
});
export const GroupTitle = styled.Text`
	font-weight: normal;
	font-size: 14px;
	color: #7e7e7e;
`;
export default FilterScreen;

const GroupContainer = styled.View`
	padding: 0 20px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const ButtonApply = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	color: #ffffff;
	width: 360px;
	height: 53px;
	background: #272727;
	position: absolute;
	right: 25px;
	top: 300px;
`;
