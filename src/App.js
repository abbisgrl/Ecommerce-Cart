import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom';
import Cards from './Components/Cards';
import CardsDetail from './Components/CardsDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/detail/:id' element={<CardsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
