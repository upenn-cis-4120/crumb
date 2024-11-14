import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { Crumb } from "../app/types/crumb";
import { useRouter } from "expo-router";

interface CrumbListProps {
	crumbs: Crumb[];
}

export default function CrumbList({ crumbs }: CrumbListProps) {
	const router = useRouter();

	const renderCrumbItem = ({ item }: { item: Crumb }) => (
		<TouchableOpacity
			style={styles.crumbItem}
			onPress={() =>
				router.push(`/crumbs/${item.title.toLowerCase().replace(/ /g, "-")}`)
			}
		>
			<View style={styles.crumbContent}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description} numberOfLines={2}>
					{item.description}
				</Text>
				<Text style={styles.date}>
					{new Date(item.createdAt).toLocaleDateString()}
				</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={crumbs}
				keyExtractor={(item) => item.id}
				renderItem={renderCrumbItem}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	crumbItem: {
		backgroundColor: "white",
		borderRadius: 8,
		padding: 16,
		marginVertical: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	crumbContent: {
		gap: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
	},
	description: {
		fontSize: 14,
		color: "#666",
	},
	date: {
		fontSize: 12,
		color: "#999",
	},
	separator: {
		height: 8,
	},
});
