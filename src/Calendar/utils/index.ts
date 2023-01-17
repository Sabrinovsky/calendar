import {
  startOfMonth as startOfMonthFns,
  endOfMonth as endOfMonthFns,
  startOfWeek as startOfWeekFns,
  endOfWeek as endOfWeekFns,
  eachDayOfInterval,
  sub,
  add,
} from 'date-fns';

// Sunday - 0
// Saturday - 7
const WEEK_DAYS = 7;

function generateCalendar(date: Date) {
  const startOfMonth = startOfMonthFns(date);
  const endOfMonth = endOfMonthFns(date);
  const previousMonthLastDays = WEEK_DAYS - (WEEK_DAYS - startOfMonth.getDay());
  const nextMonthLastDays = WEEK_DAYS - endOfMonth.getDay() - 1;

  const days = eachDayOfInterval({
    start: sub(startOfMonth, { days: previousMonthLastDays }),
    end: add(endOfMonth, { days: nextMonthLastDays }),
  });

  return days
}

function generateWeekCalendar(date: Date){
  const startOfWeek = startOfWeekFns(date);
  const endOfWeekOfWeek = endOfWeekFns(date);

  const days = eachDayOfInterval({
    start: startOfWeek,
    end: endOfWeekOfWeek,
  });

  return days
}

export { generateCalendar, generateWeekCalendar };
