import './App.css';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import dogData from './db.json';
import DogDetails from './DogDetails';

function App() {

  const { dogs } = dogData;

  return (
    <div className="App">
      <Nav dogs={dogs} />
      <Routes>
        <Route path='/dogs' element={<Home />}></Route>
        <Route path='/dogs/:name' element={<DogDetails dogs={dogs} />} />
      </Routes>
    </div>
  );
}

export default App;
