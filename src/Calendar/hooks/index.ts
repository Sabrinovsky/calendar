import { useCallback, useState } from 'react';
import { generateCalendar } from '../utils';
import { add, sub } from 'date-fns';

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

  return { calendar, nextMonth, previousMonth };
}
