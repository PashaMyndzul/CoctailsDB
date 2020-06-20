/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, SectionList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import GroupTitle from "./FilterScreen";
const HomeScreen = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
			.then(({ data }) => {
				setData(data);
			});
	}, []);

	return (
		<Container>
			{data && (
				<View>
					{data.drinks.map((data) => (
						<View>
							<GroupItem key={data.idDrink}>
								<Avatar
									style={{ width: 50, height: 50 }}
									source={{
										uri: `${data.strDrinkThumb}`,
									}}
								/>
								<DrinkName>{data.strDrink}</DrinkName>
							</GroupItem>
						</View>
					))}
				</View>
			)}
		</Container>
	);
};
HomeScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: "Drinks",
	headerRight: () => (
		<TouchableOpacity
			style={{ marginRight: 20 }}
			onPress={navigation.navigate.bind(this, "Filter")}>
			<FontAwesome name="filter" size={24} color="black" />
		</TouchableOpacity>
	),
});

export default HomeScreen;

const Container = styled.View`
	flex: 1;

	padding: 0 20px;
`;

HomeScreen.defaultProps = {
	groupTitle: "Untitled",
	items: [],
};
const DrinkName = styled.Text`
	font-weight: normal;
	font-size: 16px;
	color: #7e7e7e;
`;
const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	margin-right: 15px;
`;
const GroupItem = styled.TouchableOpacity`
	padding: 20px 0;
	flex-direction: row;
	align-items: center;
`;
// const GroupTitle = styled.Text`
// 	font-weight: normal;
// 	font-size: 14px;
// 	color: #7e7e7e;
// 	margin-top: 15px;
// `;
