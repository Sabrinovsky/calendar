import { generateCalendar } from './';

describe('generateCalendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06T12:00:00'));
  });

  it('returns an array with the current month', () => {
    const response = generateCalendar();
    console.log(response)
    console.log(new Date())
    expect(response).toHaveLength(35);
    expect(response[0].toISOString()).toBe(
      new Date('2020-05-31T04:00:00.000Z').toISOString()
    );
    expect(response[34].toISOString()).toBe(
      new Date('2020-07-04T04:00:00.000Z').toISOString()
    );
  });
});
