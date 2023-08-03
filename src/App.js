import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RoutesComp from './RoutesComp';
import { SneakerProvider } from './context/sneakersContext';


function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
