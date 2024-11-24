import { bgRed500, centerGrow, textWhite, textXl } from "@/style";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={[
        centerGrow
      ]}
    >
      <Text style={[textXl, textWhite, bgRed500]}>React Native Configurado!</Text>
    </View>
  )
}