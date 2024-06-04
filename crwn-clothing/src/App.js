import './categories.styles.scss';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App = () => {
  return (
  <Navigation>
  <Home/>   

  </Navigation>
     
  
  
    
  );
}

export default App;
