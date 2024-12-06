import React, { useState, useEffect } from "react";
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
import * as Font from "expo-font";
import { useGroceryList } from "@/hooks/useGroceryList";
import { getRecipeData } from "@/utils/recipeData";

export default function RecipePage() {
	const { recipeId } = useLocalSearchParams(); // Access the recipe ID from URL
	const router = useRouter();
	const { addToGroceryList } = useGroceryList();

	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		Font.loadAsync({
			"Neuton Bold": require("../../assets/fonts/Neuton-Bold.ttf"),
			"Merriweather Sans": require("../../assets/fonts/MerriweatherSans.ttf"),
		}).then(() => setFontsLoaded(true));
	}, []);

	const recipeData = getRecipeData(recipeId as string);

	const getRecipeImage = (id: string) => {
		switch (id) {
			case "herb-chicken":
				return require("../../assets/images/chicken.jpg");
			case "chicken-lo-mein":
				return require("../../assets/images/chicken-lo-mein.jpg");
			case "rice-and-beef-skillet":
				return require("../../assets/images/recipe-images/rice-and-beef-skillet.jpeg");
			case "pan-seared-ribeye-steak":
				return require("../../assets/images/steak.jpg");
			case "pan-seared-salmon":
				return require("../../assets/images/salmon.jpg");
			case "carbonara":
				return require("../../assets/images/carbonara.jpg");
			case "ramen":
				return require("../../assets/images/ramen.jpg");
			case "beef-tacos":
				return require("../../assets/images/tacos.jpg");
			default:
				return require("../../assets/images/recipe-images/rice-and-beef-skillet.jpeg");
		}
	};

	const renderStepWithLinks = (step: string) => {
		// Check if step contains [saute] tag
		if (step.includes("[saute]")) {
			const parts = step.split(/\[saute\]|\[\/saute\]/);
			return (
				<>
					{parts[0]}
					<Text
						style={styles.highlight}
						onPress={() => router.push("/crumbs/saute")}
					>
						sauté
					</Text>
					{parts[2]}
				</>
			);
		}
		return step;
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.container}>
				<View style={styles.headerContainer}>
					{/* Header with back button and menu */}
					<View style={styles.header}>
						<TouchableOpacity
							style={styles.headerButton}
							onPress={() => router.push("/" as Href<"/">)}
						>
							<View style={styles.buttonBackground}></View>
							<Image
								style={styles.buttonIcon}
								source={require("../../assets/icons/arrow-left.png")}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.headerButton}
							onPress={() => {
								/* TODO: Add options here */
							}}
						>
							<View style={styles.buttonBackground}></View>
							<Image
								style={styles.buttonIcon}
								source={require("../../assets/icons/three-dots.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
				{/* Title */}

				{/* Image with shadow */}
				<Image
					source={getRecipeImage(recipeId as string)}
					style={styles.image}
				/>

				<View style={styles.pageContainer}>
					{/* Recipe details */}
					<Text style={styles.title}>{recipeData?.title}</Text>
					<Text style={styles.details}>
						{recipeData?.cookTime} • {recipeData?.calories} cal/serving •{" "}
						{recipeData?.servings} servings
					</Text>

					{/* <Text>Recipe ID: {recipeId}</Text> */}

					{/* Ingredients List */}

					<Text style={styles.sectionHeader}>Ingredients</Text>

					<View style={styles.section}>
						{recipeData?.ingredients.map((ingredient, index) => (
							<Text key={index} style={styles.ingredient}>
								• {ingredient}
							</Text>
						))}
					</View>

					{/* Add to Grocery List Button */}
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							if (recipeData) {
								addToGroceryList(recipeData.ingredients, recipeId as string);
							}
						}}
					>
						<Image
							style={styles.cartIcon}
							source={require("../../assets/icons/add-shopping-cart-white.png")}
						/>
						<Text style={styles.buttonText}>Add to Grocery List</Text>
					</TouchableOpacity>

					{/* Recipe Steps */}
					<Text style={styles.sectionHeader}>Instructions</Text>

					<View style={styles.section}>
						{recipeData?.steps.map((step, index) => (
							<Text key={index} style={styles.step}>
								{index + 1}. {renderStepWithLinks(step)}
							</Text>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#FFFCF9",
	},
	container: {
		flex: 1,
		backgroundColor: "#FFFCF9",
	},
	contentContainer: {
		paddingTop: 0,
	},
	pageContainer: {
		flex: 1,
		gap: 20,
		paddingVertical: 20,
		paddingHorizontal: 25,
	},
	headerContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 1,
	},
	header: {
		flex: 1,
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingTop: 20,
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerButton: {
		opacity: 0.7,
	},
	buttonBackground: {
		width: 30,
		height: 30,
		flexShrink: 0,
		borderRadius: 50,
		backgroundColor: "#FFFCF9",
		zIndex: 1,
	},
	buttonIcon: {
		width: 20,
		height: 20,
		position: "absolute",
		top: 5,
		left: 5,
		zIndex: 2,
	},
	title: {
		fontSize: 43,
		fontFamily: "Neuton Bold",
		color: "1E1E24",
	},
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		fontSize: 16,
		fontFamily: "Merriweather Sans", // Make sure this font is loaded in your project
		color: "1E1E24",
	},
	section: {},
	sectionHeader: {
		fontSize: 24,
		fontFamily: "Neuton Bold",
		color: "1E1E24",
	},
	ingredient: {
		fontSize: 16,
		fontFamily: "Merriweather Sans",
		color: "1E1E24",
		lineHeight: 24,
	},
	button: {
		backgroundColor: "#F46036",
		paddingVertical: 7,
		paddingHorizontal: 30,
		borderRadius: 6,
		alignSelf: "stretch",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		gap: 10,
	},
	cartIcon: {
		width: 20,
		height: 20,
	},
	buttonText: {
		color: "#FFFDFA",
		fontFamily: "Merriweather Sans",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	step: {
		fontSize: 16,
		fontFamily: "Merriweather Sans",
		color: "#1E1E24",
		lineHeight: 24,
	},
	highlight: {
		color: "#3180F6",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
});
