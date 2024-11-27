import "react-native-get-random-values";

import EventoNaoEncontrado from "@/components/evento/EventoNaoEncontrado";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import Estatistica from "@/components/shared/Estatistica";
import TituloSecao from "@/components/shared/TituloSecao";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, flex1, flexRow, gapX2, gapY4, p4, py4, roundedLg, wFull } from "@/style";
import type { Convidado } from "core";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";

export default function TelaDetalheEvento() {
  const { evento, selecionarEvento } = useEventos()
  const params = useLocalSearchParams();

  useEffect(() => {

    selecionarEvento(String(params.id))

  }, [params.id])

  

  const presentes = evento?.convidados.filter((c: Convidado) => (
    c.confirmado
  ) ?? [])

  const ausentes = evento?.convidados.filter((c: Convidado) => !c.confirmado) ?? []

  const totalConvidados = presentes?.reduce((total, convidado) => (
    total + convidado.qtdeAcompanhantes + 1
  ), 0)

  return evento ? (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py4]}>
        <Image source={{ uri: evento.imagem }} style={[wFull, roundedLg, { height: 200 }]} />
        <View>
          <InformacoesEvento evento={evento} />
          <View style={[flexRow, gapX2, { marginTop: 40 }]}>
            <Estatistica
              texto="Expectativa"
              imagem={require('@/assets/images/convidados.png')}
              valor={evento.publicoEsperado}
            />
            <Estatistica
              texto="Confirmações"
              imagem={require('@/assets/images/confirmados.png')}
              valor={presentes?.length}
            />
            <Estatistica
              texto="Total de Convidados"
              imagem={require('@/assets/images/acompanhantes.png')}
              valor={totalConvidados}
            />
          </View>
          <TituloSecao texto="Presenças Confirmadas" />
          <TituloSecao texto="Ausencias Confirmadas" />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <EventoNaoEncontrado />
  )


}