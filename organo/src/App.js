import { useState } from 'react';
import { Banner } from './components/Banner';
import { Form } from './components/Formulario';
import { ShowCollaborators } from './components/ShowCollaborators';
import { Footer } from './components/Footer';

function App() {
  // state - colaboradores
  const [colaboradores, setColaboradores] = useState([])

  // state - times
  const [times, setTimes] = useState([
    {
      nome:'Programação',
      cor:'#57C278',
    },
    {
      nome:'Front-End',
      cor:'#82CFFA',
    },
    {
      nome:'Back-End',
      cor:'#A6D157',
    },
    {
      nome:'DevOps',
      cor:'#E06B69',
    },
    {
      nome:'Desing',
      cor:'#DB6EBF',
    },
    {
      nome:'Inovaçao e Gestão',
      cor:'#FF8A29',
    }
  ])

  // Criando um novo colaborador
  function newColaborador(colaborador){
    // Salvando o novo colaborador no array de colaboradores
    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner/>
      <Form setColaboradores={newColaborador} times={times} setTimes={setTimes} />
      <ShowCollaborators times={times} setTimes={setTimes} colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      <Footer/>
    </div>
  );
}

export default App;
