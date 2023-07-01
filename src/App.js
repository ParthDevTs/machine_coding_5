import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecipeDetail from './pages/recipeDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/recipe/:id' element={<RecipeDetail />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
