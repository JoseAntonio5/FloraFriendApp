import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';
import NewPlantForm from './components/NewPlantForm';
import PlantDetails from './components/PlantDetails';
import UpdatePlantForm from './components/UpdatePlantForm';
import About from './components/About';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <div className='App-background'></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plants' element={<Dashboard />} />
          <Route path='/new-plant' element={<NewPlantForm />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
          <Route path="/plants/:id/update" element={<UpdatePlantForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;