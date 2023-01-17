import { generateCalendar, generateWeekCalendar } from './';

describe('generateCalendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06T12:00:00'));
  });

  it('returns an array with the current month', () => {
    const response = generateCalendar(new Date());

    expect(response).toHaveLength(35);
    expect(response[0].toISOString()).toContain('2020-05');
    expect(response[15].toISOString()).toContain('2020-06');
    expect(response[34].toISOString()).toContain('2020-07');
  });
});

describe('generateWeekCalendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-10T12:00:00'));
  });

  it('returns an array with the current week', () => {
    const response = generateWeekCalendar(new Date());

    expect(response).toHaveLength(7);
    expect(response[0].toISOString()).toContain('2020-06-06');
    expect(response[1].toISOString()).toContain('2020-06-07');
    expect(response[2].toISOString()).toContain('2020-06-08');
    expect(response[3].toISOString()).toContain('2020-06-09');
    expect(response[4].toISOString()).toContain('2020-06-10');
    expect(response[5].toISOString()).toContain('2020-06-11');
    expect(response[6].toISOString()).toContain('2020-06-12');
  });
});
