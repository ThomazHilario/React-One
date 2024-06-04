import { useState } from 'react';
import { Banner } from './components/Banner';
import { Form } from './components/Formulario';

function App() {
  // state - colaboradores
  const [colaboradores, setColaboradores] = useState([])

  // state - times
  const times = [
    'Programação',
    'Front-End',
    'Back-End',
    'DevOps',
    'Inovaçao e Gestão',
    'Desing'
  ]

  // Criando um novo colaborador
  function newColaborador(colaborador){
    // Salvando o novo colaborador no array de colaboradores
    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner/>
      <Form setColaboradores={newColaborador} times={times}/>
    </div>
  );
}

export default App;
