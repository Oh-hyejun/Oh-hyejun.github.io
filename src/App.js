import './App.css';
import Portfolio_form from './js/portfolio_form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio_form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
