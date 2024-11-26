import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TelaDetalheEvento() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>{params.id}</Text>
    </View>
  )


}