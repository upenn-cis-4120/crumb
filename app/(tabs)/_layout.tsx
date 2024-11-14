import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/TabBarIcon";

export default function TabLayout() {
	const Colors = {
		active: "#F76D22", // Orange for the selected icon
		inactive: "#B0BEC5", // Light gray for inactive icons
		background: "#FFFFFF", // White for the tab bar background
	};

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.active,
				tabBarInactiveTintColor: Colors.inactive,
				tabBarShowLabel: true,
				tabBarStyle: {
					backgroundColor: Colors.background,
					height: 60,
					paddingBottom: 8,
					paddingTop: 8,
					borderTopWidth: 4,
					borderTopColor: Colors.active,
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
