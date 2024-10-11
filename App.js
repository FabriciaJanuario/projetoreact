import './App.css';
import BoasVindas from './BoasVindas';
import Saudacoes from './Saudacoes';
import Contador from './Contador';
import ExibirMensagem from './ExibirMensagem';
import JogoDaVelha from './JogoDaVelha';

function App() {
  return (
    <div className="App">
      <BoasVindas />
      <Saudacoes nome="Fabricia"/>
      <Contador />
      <div className='box'></div>
      <ExibirMensagem />
      <JogoDaVelha />
    </div>
  );
}

export default App;
