import { ChakraProvider } from '@chakra-ui/react';
import { Calendar } from './Calendar/Calendar';
import customTheme from './Theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <header className=""></header>
      <main>
        <Calendar />
      </main>
    </ChakraProvider>
  );
}

export default App;
