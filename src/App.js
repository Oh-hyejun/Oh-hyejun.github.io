import logo from './logo.svg';
import './App.css';
import Portfolio_form from './js/portfolio_form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/portfolio' element={ <Portfolio_form></Portfolio_form> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
