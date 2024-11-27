import "react-native-get-random-values";

import EventoNaoEncontrado from "@/components/evento/EventoNaoEncontrado";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import ListaConvidados from "@/components/evento/ListaConvidados";
import Estatistica from "@/components/shared/Estatistica";
import TituloSecao from "@/components/shared/TituloSecao";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, bgRed500, button, flex1, flexRow, fontBold, gapX2, gapY4, p4, py4, roundedLg, selfCenter, textWhite, w9_10, wFull } from "@/style";
import { AntDesign } from "@expo/vector-icons";
import type { Convidado } from "core";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function TelaDetalheEvento() {
  const { evento, selecionarEvento, excluirEvento } = useEventos()
  const params = useLocalSearchParams();
  const router = useRouter()

  useEffect(() => {

    selecionarEvento(String(params.id))

  }, [params.id])





  const presentes = evento?.convidados?.filter((c: Convidado) => (
    c.confirmado
  )) ?? [];



  const ausentes = evento?.convidados.filter((c: Convidado) => !c.confirmado) ?? []

  const totalConvidados = presentes?.reduce((total, convidado) => (
    total + convidado.qtdeAcompanhantes + 1
  ), 0)

  return evento ? (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py4]}>
        <Image source={{ uri: evento.imagem }} style={[wFull, roundedLg, { height: 200 }]} />
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
        <ListaConvidados convidados={presentes} />

        <TituloSecao texto="Ausencias Confirmadas" />
        <ListaConvidados convidados={ausentes} />

        <Pressable
          onPress={() => {
            excluirEvento(evento.id)
            router.back()
          }}
          style={[button, bgRed500, w9_10, selfCenter]}
        >
          <AntDesign name="delete" size={20} color={'white'} />
          <Text style={[fontBold, textWhite]}>Excluir Evento</Text>
        </Pressable>


      </ScrollView>
    </SafeAreaView>
  ) : (
    <EventoNaoEncontrado />
  )


}