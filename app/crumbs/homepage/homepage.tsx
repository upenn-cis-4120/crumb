import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function HomePage() {
	return (
		<ScrollView style={styles.container}>
			{/* Search bar */}
			<View style={styles.searchContainer}>
				<Entypo name="magnifying-glass" size={24} color="#A9A9B0" />
				<TextInput
					style={styles.searchInput}
					placeholder="Search recipes..."
					placeholderTextColor="#A9A9B0"
				/>
			</View>

			{/* Filter buttons */}
			<View style={styles.filtersContainer}>
				<TouchableOpacity style={styles.filterButton}>
					<Text style={styles.filterText}>Cook Now</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton}>
					<Text style={styles.filterText}>Breakfast</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton}>
					<Text style={styles.filterText}>Low Price</Text>
				</TouchableOpacity>
			</View>

			{/* Recipe cards */}
			<View style={styles.recipesContainer}>
				{mockRecipes.map((recipe, index) => (
					<View key={index} style={styles.recipeCard}>
						<Image source={recipe.image} style={styles.recipeImage} />
						<View style={styles.recipeInfo}>
							<Text style={styles.recipeTitle}>{recipe.title}</Text>
							<Text style={styles.recipeDetails}>
								{recipe.time} • {recipe.calories} Cal
							</Text>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	);
}

// Mock data for recipes
const mockRecipes = [
	{
		title: "Avocado with Nuts",
		time: "1 hr 10 min",
		calories: "195",
		image: require("../../assets/images/recipe-images/groundbeef.jpg"), // Replace with actual image path
	},
	{
		title: "Slow Cooker Chicken Lo Mein",
		time: "40 min",
		calories: "875",
		image: require("../../assets/images/recipe-images/groundbeef.jpg"),
	},
	{
		title: "Roasted Chicken",
		time: "1 hr",
		calories: "500",
		image: require("../../assets/images/recipe-images/groundbeef.jpg"),
	},
	{
		title: "Egg Salad",
		time: "20 min",
		calories: "250",
		image: require("../../assets/images/recipe-images/groundbeef.jpg"),
	},
];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#FAF3ED",
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		padding: 10,
		marginBottom: 16,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	searchInput: {
		marginLeft: 10,
		fontSize: 16,
		color: "#333",
		fontFamily: "Inter",
		flex: 1,
	},
	filtersContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 16,
	},
	filterButton: {
		backgroundColor: "#F76D22",
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 15,
	},
	filterText: {
		color: "white",
		fontFamily: "Inter",
		fontSize: 14,
	},
	recipesContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	recipeCard: {
		width: "48%",
		marginBottom: 16,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	recipeImage: {
		width: "100%",
		height: 120,
		resizeMode: "cover",
	},
	recipeInfo: {
		padding: 10,
	},
	recipeTitle: {
		fontSize: 16,
		fontFamily: "Crete Round",
		color: "#333",
		marginBottom: 4,
	},
	recipeDetails: {
		fontSize: 14,
		color: "#A9A9B0",
		fontFamily: "Inter",
	},
});
