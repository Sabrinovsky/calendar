import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useCallback, useState } from 'react';
import { Popover } from '../../../shared/Popover/Popover';
import { NewEvent } from '../NewEvent/NewEvent';

export default function WeekCalendar({
  weekCalendar,
}: {
  weekCalendar: Date[];
}) {
  // const { } = useDisclosure()
  const [popoverProps, setPopoverProps] = useState<{
    day?: Date;
    hour?: number;
  }>();
  const toggle = useCallback((day: Date, hour: number) => {
    setPopoverProps({ day, hour });
  }, []);
  return (
    <Flex className="animate" flexDirection="column" flex={1}>
      <Flex flexDirection="row" flex={1} paddingInline={10}>
        {weekCalendar.map((day, index) => (
          <Flex
            role="list"
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
                <Popover
                  isOpen={
                    popoverProps?.day === day && popoverProps?.hour === hour
                  }
                  key={day.toISOString() + hour}
                  content={
                    <NewEvent
                      key={day.toISOString() + hour}
                      hour={hour}
                      day={day}
                    />
                  }
                >
                  {(isOpen) => (
                    <Flex
                      onClick={() => toggle(day, hour)}
                      role="listitem"
                      position="relative"
                      flex={1}
                      paddingTop={0.5}
                      paddingRight={3}
                      paddingBottom={0.5}
                      paddingLeft={0.5}
                      className="hour"
                      minHeight={'50px'}
                    >
                      <Box
                        backgroundColor={isOpen ? 'blue.100' : 'white'}
                        // borderColor={isOpen ? 'blue.300' : 'white'}
                        // borderWidth={isOpen ? 2 : 0}
                        flex={1}
                        borderRadius={4}
                        boxShadow={isOpen ? 'xl' : 'none'}
                      ></Box>
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
                  )}
                </Popover>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
