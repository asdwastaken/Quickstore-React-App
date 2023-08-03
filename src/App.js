import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RoutesComp from './RoutesComp';
import { SneakerProvider } from './context/sneakersContext';
import { TshirtProvider } from './context/tShirtsContext';


function App() {

  return (
    <BrowserRouter>
      <TshirtProvider>
        <SneakerProvider>
          <div className="App">
            <header>
              <Navigation />
            </header>

            <main>
              <RoutesComp />
            </main>

          </div>
        </SneakerProvider>
      </TshirtProvider>
    </BrowserRouter>
  );
}

export default App;
