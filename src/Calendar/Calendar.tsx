import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Text,
  List,
  ListItem,
  Select,
} from '@chakra-ui/react';
import { useCallback, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.scss';
import { format, isPast, isSameMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useCalendar from './hooks';
import { Swipe } from '../components/Swipe/Swipe';

function Calendar(): JSX.Element {
  const { calendar, nextMonth, previousMonth, today } = useCalendar();
  const [direction, setDirection] = useState<'fade-left' | 'fade-right'>(
    'fade-left'
  );

  const onClickToday = useCallback(() => {
    const direction = isPast(calendar[15]) ? 'fade-left' : 'fade-right';

    setDirection(direction);
    setTimeout(() => {
      today();
    });
  }, [today, calendar]);

  const onClickPreviousMonth = useCallback(() => {
    setDirection('fade-right');
    setTimeout(() => {
      previousMonth();
    }, 0);
  }, [previousMonth]);

  const onClicknextMonth = useCallback(() => {
    setDirection('fade-left');
    setTimeout(() => {
      nextMonth();
    }, 0);
  }, [nextMonth]);

  return (
    <div className="calendar flex-column">
      <Flex gap="1rem" alignItems="center" p="1rem">
        <Button
          border="1px"
          borderColor="gray.300"
          fontSize="1.2srem"
          bg="transparent"
          onClick={onClickToday}
        >
          <Text>Hoje</Text>
        </Button>
        <Button
          fontSize="1.5rem"
          bg="transparent"
          onClick={onClickPreviousMonth}
          title="Mês anterior"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          fontSize="1.5rem"
          bg="transparent"
          onClick={onClicknextMonth}
          title="Próximo mês"
        >
          <ChevronRightIcon aria-hidden />
        </Button>
        <Text textTransform="capitalize" fontSize="1.6rem">
          {format(calendar[15], 'MMMM yyyy', { locale: ptBR })}
        </Text>
        <Select marginLeft="auto" width="120px">
          <option value="month">Mês</option>
          <option value="week">Semana</option>
        </Select>
      </Flex>
      <Swipe animationKey={calendar[15].toISOString()} direction={direction}>
        {(nodeRef) => (
          <div ref={nodeRef} className="flex-column">
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              className="animate"
            >
              <List>
                {calendar.map((day) => (
                  <ListItem key={day.toISOString()}>
                    <Text
                      color={!isSameMonth(day, calendar[15]) ? 'gray.400' : ''}
                    >
                      {format(day, 'dd')}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </div>
        )}
      </Swipe>
    </div>
  );
}

export { Calendar };
