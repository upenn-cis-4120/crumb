import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function RecipePage() {
  const { recipeId } = useLocalSearchParams(); // Access the recipe ID from the URL

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recipe ID: {recipeId}</Text>
      <Text>This is the individual recipe page.</Text>
    </View>
  );
}