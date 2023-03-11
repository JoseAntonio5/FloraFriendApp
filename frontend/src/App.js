import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';
import NewPlantForm from './components/NewPlantForm';
import PlantDetails from './components/PlantDetails';
import UpdatePlantForm from './components/UpdatePlantForm';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/plants' element={<Dashboard />} />
          <Route path='/new-plant' element={<NewPlantForm />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
          <Route path="/plants/:id/update" element={<UpdatePlantForm />} />
        </Routes>
    </div>
  );
}

export default App;