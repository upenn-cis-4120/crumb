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
import * as Font from 'expo-font';
import CrumbList from "../../components/CrumbList";
import { useSavedCrumbs } from "../../hooks/useSavedCrumbs";

export default function SavedScreen() {
	const { savedCrumbs } = useSavedCrumbs();

	const router = useRouter();

	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		Font.loadAsync({
		'Neuton Bold': require('../../assets/fonts/Neuton-Bold.ttf'),
		'Merriweather Sans': require('../../assets/fonts/MerriweatherSans.ttf'),
		}).then(() => setFontsLoaded(true));
	}, []);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Saved Crumbs</Text>
				</View>

				{savedCrumbs.length > 0 ? (
					<CrumbList crumbs={savedCrumbs} />
				) : (
					<View style={styles.emptyState}>
						<Text style={styles.emptyStateText}>No saved crumbs yet</Text>
					</View>
				)}
			</View>
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
		paddingHorizontal: 25,
		paddingTop: 20,
	},
	header: {
	},
	title: {
		fontSize: 43,
		fontFamily: "Neuton Bold",
		fontWeight: "bold",
		color: "#1E1E24",

	},
	emptyState: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyStateText: {
		fontSize: 16,
		color: "#1E1E24",
		fontFamily: "Merriweather Sans",
	},
});
