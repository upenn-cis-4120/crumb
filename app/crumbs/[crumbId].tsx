import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import * as Font from "expo-font";

// You'll want to replace these with your actual data interfaces
interface IngredientData {
	name: string;
	calories: string;
	protein: string;
	tips: string[];
	image: any; // Replace with proper image type
}

interface SkillData {
	name: string;
	description: string;
	steps: string[];
	image: any; // Replace with proper image type
}

export default function CrumbPage() {
	const { crumbId, type } = useLocalSearchParams();
	const router = useRouter();

	const [fontsLoaded, setFontsLoaded] = useState(false); 

	useEffect(() => {
		Font.loadAsync({
		'Crete Round': require('../../assets/fonts/CreteRound-Regular.ttf'),
		'Inter': require('../../assets/fonts/Inter-Regular.ttf'),
		}).then(() => setFontsLoaded(true));
	}, []);

	// Mock data - replace with actual data fetching
	const mockIngredientData: IngredientData = {
		name: typeof crumbId === "string" ? crumbId.replace(/-/g, " ") : "",
		calories: "93 cal / oz",
		protein: "5g protein / oz",
		tips: ["Defrost in fridge overnight", "Substitute with chicken or beans!"],
		image: require("../../assets/images/groundbeef.png"), // Update path as needed
	};

	const mockSkillData: SkillData = {
		name: typeof crumbId === "string" ? crumbId.replace(/-/g, " ") : "",
		description:
			"Sautéing is a quick cooking method that uses high heat and minimal oil to brown food while preserving texture. Perfect for vegetables, meats, and creating flavorful bases for dishes.",
		steps: [
			"Heat pan on medium-high heat",
			"Add a thin layer of oil and wait until it shimmers",
			"Add food in a single layer - don't overcrowd",
			"Cook until golden brown, stirring occasionally",
		],
		image: require("../../assets/images/cookingvideo.png"),
	};

	const isSkill = type === "skill";
	const data = isSkill ? mockSkillData : mockIngredientData;

	const capitalizeWords = (str: string) => {
		return str
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(" ");
	};

	const title =
		typeof crumbId === "string"
			? capitalizeWords(crumbId.replace(/-/g, " "))
			: "";

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
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

			<Text style={[styles.title, isSkill && styles.skillTitle]}>{title}</Text>

			<Image source={data.image} style={styles.image} />

			<View style={styles.detailsContainer}>
				{isSkill ? (
					<View>
						<Text style={styles.description}>{mockSkillData.description}</Text>
						<View style={styles.stepsContainer}>
							<Text style={styles.sectionTitle}>Tips</Text>
							{mockSkillData.steps.map((step, index) => (
								<View key={index} style={styles.tipContainer}>
									<Entypo name="dot-single" size={24} color="#FF7043" />
									<Text style={styles.step}>{step}</Text>
								</View>
							))}
						</View>
					</View>
				) : (
					<View>
						<View style={styles.infoContainer}>
							<View style={styles.infoItem}>
								<Entypo name="cake" size={24} color="#FF7043" />
								<Text style={styles.infoText}>
									{mockIngredientData.calories}
								</Text>
							</View>
							<View style={[styles.infoItem, styles.topMargin]}>
								<Entypo name="bowl" size={24} color="#FF7043" />
								<Text style={styles.infoText}>
									{mockIngredientData.protein}
								</Text>
							</View>
						</View>

						<View style={styles.separator} />

						<View style={styles.tipsContainer}>
							<Text style={styles.sectionTitle}>Tips</Text>
							{mockIngredientData.tips.map((tip, index) => (
								<View key={index} style={styles.tipContainer}>
									<Entypo name="dot-single" size={24} color="#FF7043" />
									<Text style={styles.tip}>{tip}</Text>
								</View>
							))}
						</View>
					</View>
				)}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#FAF3ED",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
		marginVertical: 20,
	},
	detailsContainer: {
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 32,
		fontFamily: "Crete Round",
		marginBottom: 16,
	},
	skillTitle: {
		fontSize: 40,
	},
	description: {
		fontSize: 16,
		fontFamily: "Crete Round",
		color: "#333",
		marginBottom: 20,
	},
	infoContainer: {
		marginBottom: 20,
	},
	infoItem: {
		flexDirection: "row",
		alignItems: "center",
	},
	infoText: {
		fontSize: 16,
		color: "#333",
		marginLeft: 8,
	},
	sectionTitle: {
		fontSize: 20,
		fontFamily: "Crete Round",
		marginBottom: 10,
	},
	tipsContainer: {
		marginTop: 20,
	},
	stepsContainer: {
		marginTop: 20,
	},
	tipContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	tip: {
		fontSize: 16,
		color: "#555",
		marginLeft: 8,
	},
	step: {
		fontSize: 16,
		fontFamily: "Crete Round",
		color: "#555",
		marginLeft: 8,
	},
	topMargin: {
		marginTop: 12,
	},
	separator: {
		height: 1,
		backgroundColor: "#A9A9B0",
		marginBottom: 20,
	},
});
