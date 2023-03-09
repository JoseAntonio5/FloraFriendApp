import './App.css';
import Dashboard from './components/Dashboard';
import NewPlantForm from './components/NewPlantForm';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='new-plant' element={<NewPlantForm />} />
        </Routes>
    </div>
  );
}

export default App;