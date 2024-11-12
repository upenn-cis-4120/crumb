import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Recipes Home Page</Text>
      <Button
        title="Go to Rice and Beef Skillet"
        onPress={() => router.push('/recipes/rice-beef-skillet')} // Updated path to match the new structure
      />
    </View>
  ); 
}
