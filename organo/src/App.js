import { useState } from 'react';
import { Banner } from './components/Banner';
import { Form } from './components/Formulario';
import { ShowCollaborators } from './components/ShowCollaborators';
import { Footer } from './components/Footer';

function App() {
  // state - colaboradores
  const [colaboradores, setColaboradores] = useState([])

  // state - times
  const times = [
    'Programação',
    'Front-End',
    'Back-End',
    'DevOps',
    'Desing',
    'Inovaçao e Gestão'
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
      <ShowCollaborators times={times} colaboradores={colaboradores}/>
      <Footer/>
    </div>
  );
}

export default App;
