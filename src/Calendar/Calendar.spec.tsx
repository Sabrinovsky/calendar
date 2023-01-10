import { render,screen } from "@testing-library/react"
import { Calendar } from "./Calendar"

describe('Calendar',()=>{
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-06-06'));
  });

  function mount(){
    render(<Calendar />)
  }

  it('renders the current month',()=>{
    mount()
    expect(screen.getByText('junho 2020')).toBeInTheDocument()
  })
})