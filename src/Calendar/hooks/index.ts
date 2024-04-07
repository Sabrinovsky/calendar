import { useCallback, useState } from 'react';
import { generateCalendar, generateWeekCalendar } from '../utils';
import { add, isSameMonth, startOfMonth, sub } from 'date-fns';

export default function useCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState(() => generateCalendar(new Date()));
  const [weekCalendar,setWeekCalendar] = useState(() => generateWeekCalendar(new Date()));

  const updateCalendar = useCallback((date: Date)=>{
    setCalendar(generateCalendar(date));
    setWeekCalendar(generateWeekCalendar(startOfMonth(date)))
    setCurrentDate(date)
  },[])

  const nextMonth = useCallback(() => {
    const month = add(currentDate, { months: 1 });
    updateCalendar(month)
  }, [currentDate, updateCalendar]);

  const previousMonth = useCallback(() => {
    const month = sub(currentDate, { months: 1 });
    updateCalendar(month)
  }, [currentDate, updateCalendar]);

  const nextWeek = useCallback(() => {
    const nextWeekDate = add(currentDate, { weeks: 1 });
    setWeekCalendar(generateWeekCalendar(nextWeekDate));
    setCurrentDate(nextWeekDate);
  }, [currentDate]);

  const previousWeek = useCallback(() => {
    const previousWeekDate = sub(currentDate, { weeks: 1 });
    setWeekCalendar(generateWeekCalendar(previousWeekDate));
    setCurrentDate(previousWeekDate);
  }, [currentDate]);

  const goToday = useCallback(() => {
    if (isSameMonth(new Date(), currentDate)) return;

    setCalendar(generateCalendar(new Date()));
    setCurrentDate(new Date());
  }, [currentDate]);

  return { 
    calendar, 
    nextMonth, 
    previousMonth, 
    goToday, 
    weekCalendar,
    nextWeek,
    previousWeek,
    currentDate
  };
}
