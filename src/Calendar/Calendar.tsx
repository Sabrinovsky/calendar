import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import 'styles.scss';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useCalendar from './hooks';

function Calendar(): JSX.Element {
  const [state, setState] = useState(1);
  const { calendar, nextMonth, previousMonth } = useCalendar();
  const helloRef = useRef<HTMLDivElement>(null);
  const goodbyeRef = useRef<HTMLDivElement>(null);
  const nodeRef = state ? helloRef : goodbyeRef;
  const [direction, setDirection] = useState<'fade-left' | 'fade-right'>(
    'fade-left'
  );

  return (
    <div className="calendar flex-column">
      <Flex alignItems="center" p="1rem">
        <Button
          fontSize="1.5rem"
          bg="transparent"
          onClick={() => {
            setDirection('fade-right');
            previousMonth();
            setTimeout(() => {
              setState((state) => state - 1);
            }, 0);
          }}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          fontSize="1.5rem"
          bg="transparent"
          onClick={() => {
            setDirection('fade-left');
            nextMonth();
            setTimeout(() => {
              setState((state) => state + 1);
            }, 0);
          }}
        >
          <ChevronRightIcon />
        </Button>
        <Text textTransform="capitalize" fontSize="1.6rem">
          {format(calendar[15], 'MMMM yyyy', { locale: ptBR })}
        </Text>
      </Flex>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={state}
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
