import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import { useGroceryList } from "@/hooks/useGroceryList";
import { MaterialIcons } from "@expo/vector-icons";

export default function Groceries() {
	const { groceryList, toggleItemCheck, removeItem } = useGroceryList();
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		Font.loadAsync({
			"Neuton Bold": require("../../assets/fonts/Neuton-Bold.ttf"),
			"Merriweather Sans": require("../../assets/fonts/MerriweatherSans.ttf"),
		}).then(() => setFontsLoaded(true));
	}, []);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.pageContainer}>
				<Text style={styles.title}>Grocery List</Text>
				<ScrollView style={styles.listContainer}>
					{groceryList.length === 0 ? (
						<View style={styles.emptyState}>
							<Text style={styles.emptyStateText}>
								Add something to your grocery list!
							</Text>
						</View>
					) : (
						groceryList.map((item) => (
							<View key={item.id} style={styles.listItem}>
								<TouchableOpacity
									style={styles.checkbox}
									onPress={() => toggleItemCheck(item.id)}
								>
									{item.checked && (
										<MaterialIcons name="check" size={20} color="#F46036" />
									)}
								</TouchableOpacity>
								<Text
									style={[
										styles.listItemText,
										item.checked && styles.checkedText,
									]}
								>
									{item.name}
								</Text>
								<TouchableOpacity
									style={styles.deleteButton}
									onPress={() => removeItem(item.id)}
								>
									<MaterialIcons name="close" size={20} color="#F46036" />
								</TouchableOpacity>
							</View>
						))
					)}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#FAF3ED",
	},
	pageContainer: {
		flex: 1,
		gap: 20,
		backgroundColor: "#FAF3ED",
		paddingVertical: 20,
		paddingHorizontal: 25,
	},
	listContainer: {
		flex: 1,
	},
	listItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
		gap: 12,
	},
	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "#F46036",
		alignItems: "center",
		justifyContent: "center",
	},
	deleteButton: {
		marginLeft: "auto",
	},
	listItemText: {
		fontSize: 16,
		fontFamily: "Merriweather Sans",
		color: "#1E1E24",
		flex: 1,
	},
	checkedText: {
		textDecorationLine: "line-through",
		color: "#A9A9B0",
	},
	title: {
		fontSize: 43,
		fontFamily: "Neuton Bold",
		color: "#1E1E24",
	},
	emptyState: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 40,
	},
	emptyStateText: {
		fontSize: 16,
		fontFamily: "Merriweather Sans",
		color: "#1E1E24",
	},
});
