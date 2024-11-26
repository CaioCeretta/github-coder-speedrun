import EventoCard from "@/components/evento/EventoCard";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, flex1, gapY4, p4, py8 } from "@/style";
import { SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  const { eventos } = useEventos()

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py8]}>
        {eventos.map(evento => (
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}