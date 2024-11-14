import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Crumb } from "../app/types/crumb";

const STORAGE_KEY = "saved_crumbs";

export function useSavedCrumbs() {
	const [savedCrumbs, setSavedCrumbs] = useState<Crumb[]>([]);

	useEffect(() => {
		loadSavedCrumbs();
	}, []);

	const loadSavedCrumbs = async () => {
		try {
			const stored = await AsyncStorage.getItem(STORAGE_KEY);
			if (stored) {
				setSavedCrumbs(JSON.parse(stored));
			}
		} catch (error) {
			console.error("Error loading saved crumbs:", error);
		}
	};

	const saveCrumb = async (crumb: Crumb) => {
		try {
			const newCrumbs = [...savedCrumbs, crumb];
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newCrumbs));
			setSavedCrumbs(newCrumbs);
		} catch (error) {
			console.error("Error saving crumb:", error);
		}
	};

	const removeCrumb = async (id: string) => {
		try {
			const newCrumbs = savedCrumbs.filter((crumb) => crumb.id !== id);
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newCrumbs));
			setSavedCrumbs(newCrumbs);
		} catch (error) {
			console.error("Error removing crumb:", error);
		}
	};

	const clearCrumbs = async () => {
		try {
			await AsyncStorage.removeItem(STORAGE_KEY);
			setSavedCrumbs([]);
		} catch (error) {
			console.error("Error clearing crumbs:", error);
		}
	};

	return { savedCrumbs, saveCrumb, removeCrumb, clearCrumbs };
}
