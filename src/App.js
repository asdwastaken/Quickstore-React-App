import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RoutesComp from './RoutesComp';
import { SneakerProvider } from './context/sneakersContext';
import { TshirtProvider } from './context/tShirtsContext';
import { ShortsProvider } from './context/shortsContext';


function App() {

  return (
    <BrowserRouter>
      <ShortsProvider>
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
      </ShortsProvider>
    </BrowserRouter>
  );
}

export default App;
