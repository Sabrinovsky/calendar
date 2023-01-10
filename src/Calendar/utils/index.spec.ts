import { generateCalendar } from './';

describe('generateCalendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06'));
  });

  it('returns an array with the current month', () => {
    const response = generateCalendar();
    console.log({ response });
    expect(response).toHaveLength(35);
    expect(response).toStrictEqual(
      expect.arrayContaining([
        new Date('2020-05-30T23:00:00.000Z').toISOString(),
        new Date('2020-05-31T23:00:00.000Z').toISOString(),
        new Date('2020-06-01T23:00:00.000Z').toISOString(),
        new Date('2020-06-02T23:00:00.000Z').toISOString(),
        new Date('2020-06-03T23:00:00.000Z').toISOString(),
        new Date('2020-06-04T23:00:00.000Z').toISOString(),
        new Date('2020-06-05T23:00:00.000Z').toISOString(),
        new Date('2020-06-06T23:00:00.000Z').toISOString(),
        new Date('2020-06-07T23:00:00.000Z').toISOString(),
        new Date('2020-06-08T23:00:00.000Z').toISOString(),
        new Date('2020-06-09T23:00:00.000Z').toISOString(),
        new Date('2020-06-10T23:00:00.000Z').toISOString(),
        new Date('2020-06-11T23:00:00.000Z').toISOString(),
        new Date('2020-06-12T23:00:00.000Z').toISOString(),
        new Date('2020-06-13T23:00:00.000Z').toISOString(),
        new Date('2020-06-14T23:00:00.000Z').toISOString(),
        new Date('2020-06-15T23:00:00.000Z').toISOString(),
        new Date('2020-06-16T23:00:00.000Z').toISOString(),
        new Date('2020-06-17T23:00:00.000Z').toISOString(),
        new Date('2020-06-18T23:00:00.000Z').toISOString(),
        new Date('2020-06-19T23:00:00.000Z').toISOString(),
        new Date('2020-06-20T23:00:00.000Z').toISOString(),
        new Date('2020-06-21T23:00:00.000Z').toISOString(),
        new Date('2020-06-22T23:00:00.000Z').toISOString(),
        new Date('2020-06-23T23:00:00.000Z').toISOString(),
        new Date('2020-06-24T23:00:00.000Z').toISOString(),
        new Date('2020-06-25T23:00:00.000Z').toISOString(),
        new Date('2020-06-26T23:00:00.000Z').toISOString(),
        new Date('2020-06-27T23:00:00.000Z').toISOString(),
        new Date('2020-06-28T23:00:00.000Z').toISOString(),
        new Date('2020-06-29T23:00:00.000Z').toISOString(),
        new Date('2020-06-30T23:00:00.000Z').toISOString(),
        new Date('2020-07-01T23:00:00.000Z').toISOString(),
        new Date('2020-07-02T23:00:00.000Z').toISOString(),
        new Date('2020-07-03T23:00:00.000Z').toISOString(),
      ])
    );
  });
});
