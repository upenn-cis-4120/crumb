import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "grocery_list";

export interface GroceryItem {
	id: string;
	name: string;
	checked: boolean;
	recipeId?: string;
}

export function useGroceryList() {
	const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);

	useEffect(() => {
		loadGroceryList();
	}, []);

	const loadGroceryList = async () => {
		try {
			const stored = await AsyncStorage.getItem(STORAGE_KEY);
			if (stored) {
				setGroceryList(JSON.parse(stored));
			}
		} catch (error) {
			console.error("Error loading grocery list:", error);
		}
	};

	const addToGroceryList = async (items: string[], recipeId?: string) => {
		try {
			const newItems = items.map((item) => ({
				id: `${item}-${Date.now()}`,
				name: item,
				checked: false,
				recipeId,
			}));

			const updatedList = [...groceryList, ...newItems];
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
			setGroceryList(updatedList);
		} catch (error) {
			console.error("Error adding to grocery list:", error);
		}
	};

	const toggleItemCheck = async (id: string) => {
		try {
			const updatedList = groceryList.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
			);
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
			setGroceryList(updatedList);
		} catch (error) {
			console.error("Error toggling item:", error);
		}
	};

	const removeItem = async (id: string) => {
		try {
			const updatedList = groceryList.filter((item) => item.id !== id);
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
			setGroceryList(updatedList);
		} catch (error) {
			console.error("Error removing item:", error);
		}
	};

	return { groceryList, addToGroceryList, toggleItemCheck, removeItem };
}
