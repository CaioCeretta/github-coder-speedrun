import EventoCard from "@/components/evento/EventoCard";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, flex1, gapY4, p4, py8 } from "@/style";
import { Link } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

export default function TelaEventos() {
  const { eventos } = useEventos()

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py8]}>
        {eventos.map(evento => (
          <Link key={evento.id} href={`/eventos/${evento.id}`}>
          <EventoCard key={evento.id} evento={evento} />
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}