import { Flex, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Popover } from '../../../shared/Popover/Popover';
import { NewEvent } from '../NewEvent/NewEvent';

export default function WeekCalendar({ weekCalendar }: { weekCalendar: Date[] }) {
  return (
    <Flex className='animate' flexDirection="column" flex={1}>
      <Flex flexDirection="row" flex={1} paddingInline={10}>
        {weekCalendar.map((day, index) => (
          <Flex
            role='list'
            className="week"
            flexDirection="column"
            flex={1}
            key={day.toISOString()}
          >
            <Text
              textTransform="uppercase"
              textAlign="center"
              fontSize={'0.8rem'}
            >
              {format(day, 'eeeeee', { locale: ptBR })}.
            </Text>
            <Text textAlign="center" fontSize="1.7rem">
              {format(day, 'dd')}
            </Text>
            <Flex flex={1} flexDirection="column">
              {Array.from(Array(24).keys()).map((hour) => (
                <Popover key={hour} content={()=> NewEvent({day, hour})}>
                  <Flex
                    role='listitem'
                    position="relative"
                    flex={1}
                    className="hour"
                    minHeight={'50px'}
                  >
                    {index === 0 && (
                      <Flex
                        className="hour-indicator"
                        top="-0.7rem"
                        fontSize="0.9rem"
                        left={-8}
                        minWidth="2ch"
                        justifyContent="end"
                        position="absolute"
                        color="gray.500"
                      >
                        {hour}h
                      </Flex>
                    )}
                  </Flex>
                </Popover>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
