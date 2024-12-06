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

export default function Groceries() {
  const router = useRouter();

	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		Font.loadAsync({
		'Neuton Bold': require('../../assets/fonts/Neuton-Bold.ttf'),
		'Merriweather Sans': require('../../assets/fonts/MerriweatherSans.ttf'),
		}).then(() => setFontsLoaded(true));
	}, []);


  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Grocery List</Text>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <View style={styles.listItemButton}></View>
          <Text style={styles.listItemText}>Add something to your grocery list!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    gap: 20,
    backgroundColor: "#FAF3ED",
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  listContainer: {
    flex: 1,
    gap: 10,
  },
  listItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  listItemButton: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: "#F46036",
    borderWidth: 3,
    
  },
  listItemText: {
    fontSize: 16,
    fontFamily: "Merriweather Sans",
    color: "#1E1E24",
  },
  title: {
		fontSize: 43,
		fontFamily: "Neuton Bold",
		color: "1E1E24",
	},

});
