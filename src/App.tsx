import Header from './components/Header';
import { 
  Introduction, 
  Partnership, 
  Services, 
  Summary,
  Clients
} from './sections';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Summary />
      <Services />
      <Partnership />
      <Clients />
    </>
  )
}

export default App
