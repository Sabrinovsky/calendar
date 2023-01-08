import { generateCalendar } from './';

describe('generateCalendar', () => {
  it('returns an array with the current month', () => {
    expect(generateCalendar()).toBe([]);
  });
});
