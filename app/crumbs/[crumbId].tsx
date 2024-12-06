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
import * as Font from "expo-font";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useSavedCrumbs } from "@/hooks/useSavedCrumbs";
import { Video, ResizeMode, Audio, InterruptionModeIOS, InterruptionModeAndroid } from "expo-av";


interface SkillData {
	name: string;
	description: string;
	steps: string[];
	video: any; // Maybe replace with image type later
}

export default function CrumbPage() {
	const { crumbId } = useLocalSearchParams();
	const router = useRouter();
	const { saveCrumb, removeCrumb, savedCrumbs } = useSavedCrumbs();
	const [isSaved, setIsSaved] = useState(false);

	const [fontsLoaded, setFontsLoaded] = useState(false); 

	Audio.setAudioModeAsync({
		allowsRecordingIOS: false,
		interruptionModeIOS: InterruptionModeIOS.DoNotMix, // Use the enum
		playsInSilentModeIOS: true, // Enable audio in silent mode
		shouldDuckAndroid: true,
		interruptionModeAndroid: InterruptionModeAndroid.DoNotMix, // Use the enum
		playThroughEarpieceAndroid: false,
	});

	useEffect(() => {
		Font.loadAsync({
		'Neuton Bold': require('../../assets/fonts/Neuton-Bold.ttf'),
		'Merriweather Sans': require('../../assets/fonts/MerriweatherSans.ttf'),
		}).then(() => setFontsLoaded(true));
	}, []);

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
		video: require('../../assets/crumb-videos/saute.mp4'),
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
					<View style={styles.headerContainer}>
						{/* Header with back button and menu */}
						<View style={styles.header}>
							<TouchableOpacity style={styles.headerButton} onPress={() => router.push("/" as Href<"/">)}>
								<View style={styles.buttonBackground}></View>
								<Image style={styles.buttonIcon} source={require("../../assets/icons/arrow-left.png")} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.headerButton}
								onPress={() => {
									/* TODO: Add options here */
								}}
							>
								<View style={styles.buttonBackground}></View>
								<Image style={styles.buttonIcon} source={require("../../assets/icons/three-dots.png")} />
							</TouchableOpacity>
						</View>
					</View>

					<Video
						source={data.video} // Replace with actual video URL
						rate={1.0}
						volume={1.0}
						isMuted={false}
						useNativeControls={true}
						resizeMode={ResizeMode.COVER}
						shouldPlay={false}
						isLooping={false}
						style={styles.video}
					/>

					<View style={styles.pageContainer}>
						<Text style={[styles.title]}>{title}</Text>

						<Text style={styles.infoText}>{data.description}</Text>
						
						<Text style={styles.sectionTitle}>Tips</Text>

						<View style={styles.stepsContainer}>
							{data.steps.map((step, index) => (
								<View key={index} style={styles.tipContainer}>
									<TouchableOpacity style={styles.tipsIcon} onPress={() => router.push("/" as Href<"/">)}>
										<View style={styles.iconBackground}></View>
										<Image style={styles.iconImage} source={require("../../assets/icons/exclamation.png")} />
									</TouchableOpacity>
									<Text style={styles.tip}>{step}</Text>
								</View>
							))}
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
		backgroundColor: "#FAF3ED",
	},
	contentContainer: {
		flex: 1,
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
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
	},
	video: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
	},
	pageContainer: {
		paddingHorizontal: 25,
		paddingTop: 20,
		gap: 20,
	},
	title: {
		fontSize: 43,
		fontFamily: "Neuton Bold",
	},
	description: {
		fontSize: 16,
		fontFamily: "Neuton Bold",
		color: "#1E1E24",
	},
	infoContainer: {
	},
	infoItem: {
		flexDirection: "row",
		alignItems: "center",
	},
	infoText: {
		fontSize: 16,
		fontFamily: "Merriweather Sans",
		color: "#1E1E24",
	},
	sectionTitle: {
		fontSize: 24,
		fontFamily: "Neuton Bold",
		color: "#1E1E24",
	},
	tipsContainer: {
	},
	stepsContainer: {
		gap: 10,
		paddingRight: 25,
	},
	tipContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	tip: {
		fontSize: 16,
		color: "#1E1E24",
		fontFamily: "Merriweather Sans",
	},
	tipsIcon: {
	},
	iconBackground: {
		width: 30,
		height: 30,
		flexShrink: 0,
		borderRadius: 50,
		backgroundColor: "#F46036",
		zIndex: 1,
	},
	iconImage: {
		width: 20,
		height: 20,
		position: "absolute",
		top: 5,
		left: 5,
		zIndex: 2,
	},
	step: {
		fontSize: 16,
		fontFamily: "Neuton Bold",
		color: "#555",
	},
	topMargin: {
	},
	separator: {
		height: 1,
		backgroundColor: "#A9A9B0",
	},
	bookmarkButton: {
	},
	safeArea: {
		flex: 1,
		backgroundColor: "#FAF3ED",
	},
});
