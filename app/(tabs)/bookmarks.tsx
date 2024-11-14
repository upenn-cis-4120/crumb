import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CrumbList from "../../components/CrumbList";
import { useSavedCrumbs } from "../../hooks/useSavedCrumbs";

export default function SavedScreen() {
	const { savedCrumbs } = useSavedCrumbs();

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
		padding: 16,
	},
	header: {
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	emptyState: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 40,
	},
	emptyStateText: {
		fontSize: 16,
		color: "#666",
	},
});
