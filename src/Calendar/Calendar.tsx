import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useCallback, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.scss';
import { format, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useCalendar from './hooks';

function Calendar(): JSX.Element {
  const { calendar, nextMonth, previousMonth, today } = useCalendar();
  const nodeRef = useRef<HTMLDivElement>(null);
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
        >
          <ChevronLeftIcon />
        </Button>
        <Button fontSize="1.5rem" bg="transparent" onClick={onClicknextMonth}>
          <ChevronRightIcon />
        </Button>
        <Text textTransform="capitalize" fontSize="1.6rem">
          {format(calendar[15], 'MMMM yyyy', { locale: ptBR })}
        </Text>
      </Flex>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={calendar[15].toString()}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef?.current?.addEventListener('transitionend', done, false);
          }}
          classNames={direction}
        >
          <div ref={nodeRef} className="flex-column">
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              className="animate"
            >
              <ul>
                {calendar.map((day) => (
                  <li key={day.toISOString()}>{format(day, 'dd')}</li>
                ))}
              </ul>
            </Box>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export { Calendar };
