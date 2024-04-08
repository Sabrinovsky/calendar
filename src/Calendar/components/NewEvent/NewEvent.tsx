import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { addHours, format } from 'date-fns';
import { useForm } from 'react-hook-form';

export function NewEvent({ hour, day }: { hour: number; day: Date }) {
  const { register, getValues } = useForm({
    defaultValues: {
      startHour: format(addHours(day, hour).getTime(), 'HH:mm'),
      endHour: format(addHours(day, hour + 1).getTime(), 'HH:mm'),
    },
  });
  
  return (
    <>
      <Heading as="h2" size="lg" mb={4}>
        Novo Evento
      </Heading>
      <form>
        <FormControl id="eventName" mb={4}>
          <FormLabel>Nome do Evento</FormLabel>
          <Input type="text" />
        </FormControl>
        <Text mb={4}>
          Adicione um novo evento para o dia {day?.toLocaleDateString()}
        </Text>
        <FormLabel>Inicio</FormLabel>
        <Input {...register('startHour')} placeholder="Inicio" size="md" />

        <FormLabel>Fim</FormLabel>
        <Input {...register('endHour')} placeholder="Inicio" size="md" />

        <FormControl id="eventDescription" mb={4}>
          <FormLabel>Descrição do Evento</FormLabel>
          <Textarea />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Adicionar
        </Button>
      </form>
    </>
  );
}
