import { NavbarMain } from './NavbarMain';
import { Intro } from './Intro';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <Intro/>
    </div>
  );
}

export default App;
