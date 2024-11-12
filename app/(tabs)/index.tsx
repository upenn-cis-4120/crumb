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
        title="Go to Recipe 123"
        onPress={() => router.push('/recipes/123')} // Updated path to match the new structure
      />
    </View>
  ); 
}
