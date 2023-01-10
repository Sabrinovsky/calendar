import { useCallback, useState } from 'react';
import { generateCalendar } from '../utils';
import { add, isSameMonth, sub } from 'date-fns';

export default function useCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState(() => generateCalendar());

  const nextMonth = useCallback(() => {
    const month = add(currentDate, { months: 1 });
    setCalendar(generateCalendar(month));
    setCurrentDate(month);
  }, [currentDate]);

  const previousMonth = useCallback(() => {
    const month = sub(currentDate, { months: 1 });
    setCalendar(generateCalendar(month));
    setCurrentDate(month);
  }, [currentDate]);

  const today = useCallback(() => {
    if (isSameMonth(new Date(), currentDate)) return;

    setCalendar(generateCalendar(new Date()));
    setCurrentDate(new Date());
  }, [currentDate]);

  return { calendar, nextMonth, previousMonth, today };
}
