import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Calendar } from "./Calendar"

describe('Calendar', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06'));
  });

  function mount() {
    render(<Calendar />)
  }
  it('renders the current month with each day', () => {
    mount()
    expect(screen.getByText('junho 2020')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(35)
  })

  describe('Next month button', () => {
    it('changes the calendar to the next month when clicked', async () => {
      mount()
      expect(screen.queryByText('julho 2020')).not.toBeInTheDocument()
      userEvent.click(screen.getByTitle('Próximo mês'))
      expect(await screen.findByText('julho 2020')).toBeInTheDocument()
    })
  })

  describe('Previous month button', () => {
    it('changes the calendar to the next month when clicked', async () => {
      mount()
      expect(screen.queryByText('maio 2020')).not.toBeInTheDocument()
      userEvent.click(screen.getByTitle('Mês anterior'))
      expect(await screen.findByText('maio 2020')).toBeInTheDocument()
    })
  })

  describe('when the calendar is on week view', () => {
    it('renders the week days', async () => {
      mount()

      userEvent.selectOptions(screen.getByLabelText('modo'), 'week')

      // renders a full week
      expect(screen.getByText('31')).toBeInTheDocument()
      expect(screen.getByText('01')).toBeInTheDocument()
      expect(screen.getByText('02')).toBeInTheDocument()
      expect(screen.getByText('03')).toBeInTheDocument()
      expect(screen.getByText('04')).toBeInTheDocument()
      expect(screen.getByText('05')).toBeInTheDocument()
      expect(screen.getByText('06')).toBeInTheDocument()

      // does not render any day after of before that week
      expect(screen.queryByText('30')).not.toBeInTheDocument()
      expect(screen.queryByText('07')).not.toBeInTheDocument()
    })

    describe('Next week button', () => {
      it('changes the calendar to the next week when clicked', async () => {
        mount()
        userEvent.selectOptions(screen.getByLabelText('modo'), 'week')
        expect(screen.queryByText('07')).not.toBeInTheDocument()
        userEvent.click(screen.getByTitle('Próxima semana'))
        expect(await screen.findByText('07')).toBeInTheDocument()
      })
    })

    describe('Previous week button', () => {
      it('changes the calendar to the next week when clicked', async () => {
        mount()
        userEvent.selectOptions(screen.getByLabelText('modo'), 'week')
        expect(screen.queryByText('30')).not.toBeInTheDocument()
        userEvent.click(screen.getByTitle('Semana anterior'))
        expect(await screen.findByText('30')).toBeInTheDocument()
      })
    })
  })

  describe('when the user navigates to another month and then changes the view to week', () => {
    it('opens the week view on the first week of the month', async () => {
      mount()
      userEvent.click(screen.getByTitle('Mês anterior'))
      await screen.findByText('maio 2020')
      userEvent.selectOptions(screen.getByLabelText('modo'), 'week')

      expect(screen.getByText('26')).toBeInTheDocument()
      expect(screen.getByText('27')).toBeInTheDocument()
      expect(screen.getByText('28')).toBeInTheDocument()
      expect(screen.getByText('29')).toBeInTheDocument()
      expect(screen.getByText('30')).toBeInTheDocument()
      expect(screen.getByText('01')).toBeInTheDocument()
      expect(screen.getByText('02')).toBeInTheDocument()
    })
  })

  describe('Today button', () => {
    it('changes the calendar to the current month', async () => {
      mount()

      userEvent.click(screen.getByTitle('Mês anterior'))
      expect(await screen.findByText('maio 2020')).toBeInTheDocument()

      userEvent.click(screen.getByText('Hoje'))
      expect(await screen.findByText('junho 2020')).toBeInTheDocument()
    })
  })
})