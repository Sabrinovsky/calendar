import { generateCalendar } from './';

describe('generateCalendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06'));
  });

  it('returns an array with the current month', () => {
    const response = generateCalendar();
    console.log({ response });
    expect(response).toHaveLength(35);
    expect(response[0]).toStrictEqual(
      new Date('2020-05-30T23:00:00.000Z')
    );
    expect(response[34]).toStrictEqual(
      new Date('2020-07-03T23:00:00.000Z')
    );
  });
});
