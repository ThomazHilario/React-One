import { Banner } from './components/Banner';
import { InputForm } from './components/InputForm';

function App() {
  return (
    <div className="App">
      <Banner/>
      <InputForm nameLabel={'Nome'} textPlaceholder={'Digite o seu nome...'}/>
      <InputForm nameLabel={'Cargo'} textPlaceholder={'Digite o seu cargo...'}/>
      <InputForm nameLabel={'Imagem'} textPlaceholder={'Informe o endereço da imagem...'}/>
    </div>
  );
}

export default App;
