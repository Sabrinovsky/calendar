import { generateCalendar } from './';

describe('generateCalendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06T12:00:00'));
  });

  it('returns an array with the current month', () => {
    const response = generateCalendar();

    expect(response).toHaveLength(35);
    expect(response[0].toISOString()).toBe(
      new Date('2020-05-30T23:00:00.000Z').toISOString()
    );
    expect(response[34].toISOString()).toBe(
      new Date('2020-07-03T23:00:00.000Z').toISOString()
    );
  });
});
