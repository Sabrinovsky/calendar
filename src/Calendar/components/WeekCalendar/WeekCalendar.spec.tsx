import { render, screen } from '@testing-library/react';
import { generateWeekCalendar } from '../../utils';
import WeekCalendar from './WeekCalendar';

describe('Calendar', () => {
  function mount() {
    render(
      <WeekCalendar
        weekCalendar={generateWeekCalendar(new Date('2023-08-30'))}
      />
    );
  }

  it('renders each week day received with each hour', () => {
    mount();

    expect(screen.getByText(/dom/)).toBeInTheDocument();
    expect(screen.getByText(/seg/)).toBeInTheDocument();
    expect(screen.getByText(/ter/)).toBeInTheDocument();
    expect(screen.getByText(/qua/)).toBeInTheDocument();
    expect(screen.getByText(/qui/)).toBeInTheDocument();
    expect(screen.getByText(/sex/)).toBeInTheDocument();
    expect(screen.getByText(/sab/)).toBeInTheDocument();
    
    Array.from(Array(24).keys()).forEach((hour) => {
      expect(screen.getByText(`${hour}h`)).toBeInTheDocument();
    });
  });
});
