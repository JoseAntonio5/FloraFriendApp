import './App.css';
import Dashboard from './components/Dashboard';
import NewPlantForm from './components/NewPlantForm';
import { Routes, Route } from "react-router-dom"
import PlantDetails from './components/PlantDetails';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='new-plant' element={<NewPlantForm />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
        </Routes>
    </div>
  );
}

export default App;