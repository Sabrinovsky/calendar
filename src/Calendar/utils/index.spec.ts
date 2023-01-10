import { generateCalendar } from './';

describe('generateCalendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06T12:00:00'));
  });

  it('returns an array with the current month', () => {
    const response = generateCalendar();
    console.log(response);
    console.log(new Date());
    expect(response).toHaveLength(35);
    expect(response[0].toISOString()).toContain('2020-05');
    expect(response[15].toISOString()).toContain('2020-06');
    expect(response[34].toISOString()).toContain('2020-07');
  });
});
