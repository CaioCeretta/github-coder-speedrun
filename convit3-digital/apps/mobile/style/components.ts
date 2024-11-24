import { StyleSheet } from "react-native";
import { bgRed500 } from "./utility";

const styles = StyleSheet.create({
  centerGrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: bgRed500.backgroundColor,
    padding: 10,
    borderRadius: 5
  }
})

export const centerGrow = styles.centerGrow
export const botao = styles.botao;