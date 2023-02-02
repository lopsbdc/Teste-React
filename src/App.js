import './App.css';
import FirstComponent from './components/FirstComponent';
import OutroComponente from './components/OutroComponente';
import Images from './components/imagens';
import Hooks from './components/hooks';
import List from './components/list';
import RenderCond from './components/rendercond';
import Fragmento from './components/fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2> Teste! </h2>
      <FirstComponent />
      <OutroComponente />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={5}/>
      <Fragmento />
      <Container> 
        <h1>Teste</h1>

      </Container>
    </div>
  );
}

export default App;
