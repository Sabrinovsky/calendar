import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex, Select, Text
} from '@chakra-ui/react';
import { format, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useCallback, useState } from 'react';
import { Swipe } from '../components/Swipe/Swipe';
import { Popover } from '../shared/Popover/Popover';
import MonthCalendar from './components/MonthCalendar/MonthCalendar';
import WeekCalendar from './components/WeekCalendar/WeekCalendar';
import useCalendar from './hooks';
import './styles.scss';

function Calendar(): JSX.Element {
  const [view, setView] = useState('month');
  const {
    calendar,
    nextMonth,
    previousMonth,
    goToday,
    weekCalendar,
    nextWeek,
    previousWeek,
    currentDate
  } = useCalendar();
  const [direction, setDirection] = useState<'fade-left' | 'fade-right'>(
    'fade-left'
  );

  const onClickToday = useCallback(() => {
    const direction = isPast(calendar[15]) ? 'fade-left' : 'fade-right';

    setDirection(direction);
    setTimeout(() => {
      goToday();
    });
  }, [goToday, calendar]);

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

  const onClickPreviousWeek = useCallback(() => {
    setDirection('fade-right');
    setTimeout(() => {
      previousWeek();
    }, 0);
  }, [previousWeek]);

  const onClickNextWeek = useCallback(() => {
    setDirection('fade-left');
    setTimeout(() => {
      nextWeek();
    }, 0);
  }, [nextWeek]);

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
        {view === 'month' ? (
          <>
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
          </>
        ) : (
          <>
            <Button
              fontSize="1.5rem"
              bg="transparent"
              onClick={onClickPreviousWeek}
              title="Semana anterior"
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              fontSize="1.5rem"
              bg="transparent"
              onClick={onClickNextWeek}
              title="Próxima semana"
            >
              <ChevronRightIcon aria-hidden />
            </Button>
          </>)
        }
        <Text textTransform="capitalize" fontSize="1.6rem">
          {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
        </Text>
        <Select
          aria-label='modo'
          onChange={(e) => setView(e.target.value)}
          marginLeft="auto"
          width="120px"
        >
          <option value="month">Mês</option>
          <option value="week">Semana</option>
        </Select>
      </Flex>
      {view === 'month' && (
        <Swipe animationKey={currentDate.toISOString()} direction={direction}>
          {(nodeRef) => (
            <div ref={nodeRef} className="flex-column">
              <MonthCalendar calendar={calendar}></MonthCalendar>
            </div>
          )}
        </Swipe>
      )}
      {view === 'week' && (
        <Swipe animationKey={currentDate.toISOString()} direction={direction}>
          {(nodeRef) => (
            <div ref={nodeRef} className="flex-column">
              <WeekCalendar weekCalendar={weekCalendar}></WeekCalendar>
            </div>
          )}
        </Swipe>
      )}
    </div>
  );
}

export { Calendar };
