import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

export default function useLocalStorage() {

  const salvarItem = useCallback(async function (chave: string, valor: string) {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
  }, [])

  const oberItem = useCallback(async function (chave: string) {
    const valor = await AsyncStorage.getItem(chave)
    return valor ? JSON.parse(valor) : "nul"
  }, [])

  const removerItem = useCallback(async function (chave: string) {
    await AsyncStorage.removeItem(chave)
  }, [])

  return { salvarItem, oberItem, removerItem }
}

