import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	const Colors = {
		active: "#F76D22", // Orange for the selected icon
		inactive: "#B0BEC5", // Light gray for inactive icons
		background: "#FFFFFF", // White for the tab bar background
	};

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.active, // Orange for active tab
				tabBarInactiveTintColor: Colors.inactive, // Gray for inactive tabs
				tabBarShowLabel: true, // Show tab labels
				tabBarStyle: {
					backgroundColor: Colors.background,
					height: 60,
					paddingBottom: 8,
					paddingTop: 8,
					borderTopWidth: 4, // Set the thickness of the orange bar
					borderTopColor: Colors.active, // Set the color of the bar to orange
				},
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "My Recipes",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "list-circle" : "list-circle-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="bookmarks"
				options={{
					title: "Bookmarks",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "bookmarks" : "bookmarks-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="groceries"
				options={{
					title: "Grocery List",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "cart" : "cart-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "settings" : "settings-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
