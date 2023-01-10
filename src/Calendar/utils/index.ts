import {
  startOfMonth as startOfMonthFns,
  endOfMonth as endOfMonthFns,
  eachDayOfInterval,
  sub,
  add,
} from 'date-fns';

// Sunday - 0
// Saturday - 7
const WEEK_DAYS = 7;

function generateCalendar(date = new Date) {
  const today = date
  const startOfMonth = startOfMonthFns(today);
  const endOfMonth = endOfMonthFns(today);
  const previousMonthLastDays = WEEK_DAYS - (WEEK_DAYS - startOfMonth.getDay());
  const nextMonthLastDays = WEEK_DAYS - endOfMonth.getDay() - 1;

  const days = eachDayOfInterval({
    start: sub(startOfMonth, { days: previousMonthLastDays }),
    end: add(endOfMonth, { days: nextMonthLastDays }),
  });

  return days.map((date)=>date.toISOString());
}

export { generateCalendar };
