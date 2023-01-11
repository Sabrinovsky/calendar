import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Calendar } from "./Calendar"

describe('Calendar',()=>{
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06'));
  });

  function mount(){
    render(<Calendar />)
  }

  it('renders the current month with each day',()=>{
    mount()
    expect(screen.getByText('junho 2020')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(35)
  })

  describe('Next month button',()=>{
    it('changes the calendar to the next month when clicked', async()=>{
      mount()

      userEvent.click(screen.getByTitle('Próximo mês'))
      expect(await screen.findByText('julho 2020')).toBeInTheDocument()
    })
  })

  describe('Previous month button',()=>{
    it('changes the calendar to the next month when clicked', async()=>{
      mount()

      userEvent.click(screen.getByTitle('Mês anterior'))
      expect(await screen.findByText('maio 2020')).toBeInTheDocument()
    })
  })

  describe('Today button',()=>{
    it('changes the calendar to the current month', async()=>{
      mount()

      userEvent.click(screen.getByTitle('Mês anterior'))
      expect(await screen.findByText('maio 2020')).toBeInTheDocument()

      userEvent.click(screen.getByText('Hoje'))
      expect(await screen.findByText('junho 2020')).toBeInTheDocument()
    })
  })
})