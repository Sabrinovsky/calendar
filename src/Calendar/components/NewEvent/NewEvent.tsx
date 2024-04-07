import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export function NewEvent({ hour, day }: { hour: number, day: Date }) {
  const [endHour, setEndHour] = useState(hour + 1);
  return (
    <>
      <Heading as="h2" size="lg" mb={4}>Novo Evento</Heading>
      <Text mb={4}>Adicione um novo evento para o dia {day.toLocaleDateString()} das {hour}h até {endHour}h</Text>
      <form>
        <FormControl id="eventName" mb={4}>
          <FormLabel>Nome do Evento</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="eventDescription" mb={4}>
          <FormLabel>Descrição do Evento</FormLabel>
          <Textarea />
        </FormControl>
        <Button type="submit" colorScheme="blue">Adicionar</Button>
      </form>
    </>
  )
}