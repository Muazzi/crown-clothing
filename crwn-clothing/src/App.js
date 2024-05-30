import './categories.styles.scss';
import  home from './components/routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
const App = () => {
  return (
    <Routes>
    <Navigation/>
      <Route path='/' index element={<home />} />
    </Routes>
  );
}

export default App;
