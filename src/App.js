import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import RoutesComp from './RoutesComp';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navigation />
        </header>

        <main>
          <RoutesComp />
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
