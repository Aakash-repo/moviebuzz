import './App.css';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.css";
import"./Components/Style.css";
import { Carous } from './Components/Carous';
import { Grid } from './Components/Grid';
import { Recte } from './Components/Recte';

function App() {
  return (
  <>
  <Header/>
  <Carous/>
  <Grid/>
  <Recte/>
  </>
  );
}

export default App;
