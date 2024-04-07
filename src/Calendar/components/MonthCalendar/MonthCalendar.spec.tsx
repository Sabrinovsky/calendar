import { render, screen } from '@testing-library/react';
import { generateCalendar } from '../../utils';
import MonthCalendar from './MonthCalendar';

describe('Calendar', () => {
  function mount() {
    render(<MonthCalendar calendar={generateCalendar(new Date('2020-06-06'))} />);
  }

  it('renders the received calendar days', () => {
    mount();

    expect(screen.getAllByRole('listitem')).toHaveLength(35);
  });
});
