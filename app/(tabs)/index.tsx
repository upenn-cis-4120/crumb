import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
	const router = useRouter();

	// Mock data for demonstration
	const mockRecipes = [
		{
			name: "Creamy Herb Chicken",
			calories: "195 Cal",
			cookTime: "1 hr 10 min",
			image: require("../../assets/images/chicken.jpg"),
		},
		{
			name: "Chicken Lo Mein",
			calories: "875 Cal",
			cookTime: "40 min",
			image: require("../../assets/images/chicken-lo-mein.jpg"),
		},
		{
			name: "Rice and Beef Skillet",
			calories: "500 Cal",
			cookTime: "1 hr",
			image: require("../../assets/images/recipe-images/rice-and-beef-skillet.jpeg"),
			isLink: true,
		},
		{
			name: "Steak",
			calories: "250 Cal",
			cookTime: "20 min",
			image: require("../../assets/images/steak.jpg"),
		},
		{
			name: "Pan Seared Salmon",
			calories: "600 Cal",
			cookTime: "45 min",
			image: require("../../assets/images/salmon.jpg"),
		},
		{
			name: "Carbonara",
			calories: "300 Cal",
			cookTime: "30 min",
			image: require("../../assets/images/carbonara.jpg"),
		},
		{
			name: "Ramen",
			calories: "200 Cal",
			cookTime: "25 min",
			image: require("../../assets/images/ramen.jpg"),
		},
		{
			name: "Beef Tacos",
			calories: "400 Cal",
			cookTime: "35 min",
			image: require("../../assets/images/tacos.jpg"),
		},
	];

	const cuisines = [
		"Asian",
		"Mexican",
		"South African",
		"Italian",
		"American",
		"Indian",
		"French",
		"Mediterranean",
		"Japanese",
	];

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

			{/* Horizontal filter buttons with filter icon */}
			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
				<TouchableOpacity style={styles.filterIconButton}>
					<Entypo name="grid" size={24} color="#FFFFFF" />
				</TouchableOpacity>
				{cuisines.map((cuisine, index) => (
					<TouchableOpacity key={index} style={styles.filterButton}>
						<Text style={styles.filterText}>{cuisine}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>

			{/* Recipe cards */}
			<View style={styles.recipesContainer}>
				{mockRecipes.map((recipe, index) => (
					<TouchableOpacity
						key={index}
						style={styles.recipeCard}
						onPress={() => {
							// Navigate if it's the Rice and Beef Skillet card
							if (recipe.isLink) {
								router.push("/recipes/rice-beef-skillet");
							}
						}}
					>
						<Image source={recipe.image} style={styles.recipeImage} />
						<View style={styles.recipeInfo}>
							<Text style={styles.recipeTitle}>{recipe.name}</Text>
							<Text style={styles.recipeDetails}>
								{recipe.cookTime} • {recipe.calories}
							</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#FFF7EB",
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
		flex: 1,
	},
	filtersContainer: {
		flexDirection: "row",
		marginBottom: 16,
	},
	filterIconButton: {
		backgroundColor: "#F89762",
		padding: 8,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 8,
	},
	filterButton: {
		backgroundColor: "#F89762",
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 15,
		marginRight: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	filterText: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
	},
	recipesContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		paddingHorizontal: 4,
	},
	recipeCard: {
		width: "48%",
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 16,
		backgroundColor: "#FFFFFF",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	recipeImage: {
		width: "100%",
		height: 120, // Adjusted height to take up top 2/3
	},
	recipeInfo: {
		backgroundColor: "#F89762", // Set bottom third to #F89762
		paddingVertical: 10,
		paddingHorizontal: 8,
		alignItems: "center",
	},
	recipeTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#FFFFFF", // White text for better contrast
		marginBottom: 4,
		textAlign: "center",
	},
	recipeDetails: {
		fontSize: 14,
		color: "#FFFFFF", // White text for better contrast
		textAlign: "center",
	},
});
