import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { format, isSameDay, isSameMonth } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function MonthCalendar({ calendar }: { calendar: Date[] }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      className="animate"
    >
      <List>
        {calendar.map((day, index) => (
          <ListItem key={day.toISOString()}>
            {index < 7 && (
              <Text
                color="gray.600"
                fontSize="0.7rem"
                textTransform="uppercase"
              >
                {format(day, 'eeeeee', { locale: ptBR })}.
              </Text>
            )}

            <Text
              className={isSameDay(new Date(), day) ? 'today' : ''}
              color={
                !isSameMonth(day, calendar[15]) ? 'gray.400' : ''
              }
            >
              {format(day, 'dd')}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
