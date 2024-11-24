import { bgRed500, centerGrow, textWhite, textXL } from "@/style";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={[
        centerGrow
      ]}
    >
      <Text style={[textXL, textWhite, bgRed500]}>React Native Configurado!</Text>
    </View>
  )
}