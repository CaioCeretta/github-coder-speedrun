import "react-native-get-random-values";

import EventoNaoEncontrado from "@/components/evento/EventoNaoEncontrado";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, flex1, gapY4, p4, py4, roundedLg, wFull } from "@/style";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, SafeAreaView, ScrollView } from "react-native";

export default function TelaDetalheEvento() {
  const { evento, selecionarEvento } = useEventos()
  const params = useLocalSearchParams();

  useEffect(() => {

    selecionarEvento(String(params.id))

  }, [params.id])

  return evento ? (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py4]}>
        <Image source={{ uri: evento.imagem }} style={[wFull, roundedLg, {height: 200}]} />
      </ScrollView>
    </SafeAreaView>
  ) : (
    <EventoNaoEncontrado />
  )


}