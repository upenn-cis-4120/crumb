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
import { useLocalSearchParams, useRouter } from "expo-router";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useSavedCrumbs } from "@/hooks/useSavedCrumbs";

interface SkillData {
	name: string;
	description: string;
	steps: string[];
	image: any; // Maybe replace with image type later
}

export default function CrumbPage() {
	const { crumbId } = useLocalSearchParams();
	const router = useRouter();
	const { saveCrumb, removeCrumb, savedCrumbs } = useSavedCrumbs();
	const [isSaved, setIsSaved] = useState(false);

	const data: SkillData = {
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

	useEffect(() => {
		setIsSaved(savedCrumbs.some((crumb) => crumb.id === data.name));
	}, [savedCrumbs, data.name]);

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

	const handleSaveCrumb = async () => {
		if (isSaved) {
			await removeCrumb(data.name);
		} else {
			await saveCrumb({
				id: data.name,
				title: title,
				createdAt: new Date(),
				description: data.description,
			});
		}
		setIsSaved(!isSaved);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.container}>
				<View style={styles.contentContainer}>
					<View style={styles.header}>
						<TouchableOpacity onPress={() => router.back()}>
							<Entypo name="chevron-left" size={24} color="black" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => handleSaveCrumb()}
							style={styles.bookmarkButton}
						>
							<MaterialIcons
								name={isSaved ? "bookmark" : "bookmark-outline"}
								size={24}
								color="#FF7043"
							/>
						</TouchableOpacity>
					</View>

					<Text style={[styles.skillTitle]}>{title}</Text>

					<Image source={data.image} style={styles.image} />

					<View style={styles.detailsContainer}>
						<View>
							<Text style={styles.description}>{data.description}</Text>
							<View style={styles.stepsContainer}>
								<Text style={styles.sectionTitle}>Tips</Text>
								{data.steps.map((step, index) => (
									<View key={index} style={styles.tipContainer}>
										<Entypo name="dot-single" size={24} color="#FF7043" />
										<Text style={styles.step}>{step}</Text>
									</View>
								))}
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#FAF3ED",
	},
	contentContainer: {
		flex: 1,
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
	bookmarkButton: {
		padding: 8,
	},
	safeArea: {
		flex: 1,
		backgroundColor: "#FAF3ED",
	},
});
