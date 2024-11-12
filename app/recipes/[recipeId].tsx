import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, Href } from "expo-router";

export default function RecipePage() {
	const { recipeId } = useLocalSearchParams(); // Access the recipe ID from the URL
	const router = useRouter();

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.container}>
				<View style={styles.contentContainer}>
					{/* Header with back button and menu */}
					<View style={styles.header}>
						<TouchableOpacity onPress={() => router.push("/" as Href<"/">)}>
							<Entypo name="chevron-left" size={24} color="black" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								/* Add sharing options here */
							}}
						>
							<Entypo name="dots-three-vertical" size={24} color="black" />
						</TouchableOpacity>
					</View>

					{/* Title */}
					<Text style={styles.title}>Rice & Beef Skillet</Text>

					{/* Image with shadow */}
					<Image
						source={require("../../assets/images/recipe-images/rice-and-beef-skillet.jpeg")} // Replace with actual image URL or local path
						style={styles.image}
					/>

					{/* Recipe details */}
					<Text style={styles.details}>
						60min • 500 cal/serving • 3 servings
					</Text>
					<Text>Recipe ID: {recipeId}</Text>

					{/* Ingredients List */}
					<View style={styles.section}>
						<Text style={styles.ingredient}>• 1 onion, chopped</Text>
						<Text style={styles.ingredient}>• 1 lb ground beef</Text>
						<Text style={styles.ingredient}>• 1 cup monterey jack cheese</Text>
						<Text style={styles.ingredient}>• 1 tsp dried mustard</Text>
						<Text style={styles.ingredient}>
							• 3 beef bullion cubes, crushed
						</Text>
						<Text style={styles.ingredient}>• 2 scallions, sliced</Text>
						<Text style={styles.ingredient}>• 1 cup rice</Text>

						{/* Add to Grocery List Button */}
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>Add to Grocery List</Text>
						</TouchableOpacity>
					</View>

					{/* Recipe Steps */}
					<View style={styles.section}>
						<Text style={styles.step}>
							1. Heat olive oil in a skillet and{" "}
							<Text
								style={styles.highlight}
								onPress={() =>
									router.push(
										"/crumbs/saute?type=skill" as Href<"/crumbs/[skillCrumb]">
									)
								}
							>
								sauté
							</Text>{" "}
							onions.
						</Text>
						<Text style={styles.step}>
							2. Add{" "}
							<Text
								style={styles.highlight}
								onPress={() =>
									router.push(
										"/crumbs/ground-beef?type=ingredient" as Href<"/crumbs/[ingredientCrumb]">
									)
								}
							>
								ground beef
							</Text>
							, dried mustard, bullion cubes, rice, and 1 cup of water.
						</Text>
						<Text style={styles.step}>3. Let the water absorb for 25min.</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#FAF3ED",
	},
	container: {
		flex: 1,
		backgroundColor: "#FAF3ED",
	},
	contentContainer: {
		padding: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
	},
	title: {
		fontSize: 32,
		fontFamily: "Crete Round", // Make sure this font is loaded in your project
		color: "black",
		marginBottom: 8,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 8,
		marginBottom: 16,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
	},
	details: {
		fontSize: 16,
		fontFamily: "Inter", // Make sure this font is loaded in your project
		color: "black",
		marginBottom: 16,
	},
	section: {
		borderTopWidth: 1,
		borderColor: "#A9A9B0",
		paddingVertical: 16,
	},
	ingredient: {
		fontSize: 16,
		fontFamily: "Inter",
		color: "black",
		marginBottom: 4,
	},
	button: {
		backgroundColor: "#F89762",
		paddingVertical: 10,
		paddingHorizontal: 16,
		borderRadius: 15,
		alignSelf: "flex-start",
		marginTop: 16,
	},
	buttonText: {
		color: "white",
		fontFamily: "Inter",
		fontSize: 16,
	},
	step: {
		fontSize: 16,
		fontFamily: "Inter",
		color: "black",
		marginBottom: 8,
	},
	highlight: {
		color: "#F76D22",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
});
