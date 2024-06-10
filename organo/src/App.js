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
      corPrincipal:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrincipal:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Back-End',
      corPrincipal:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'DevOps',
      corPrincipal:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Desing',
      corPrincipal:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Inovaçao e Gestão',
      corPrincipal:'#FF8A29',
      corSecundaria:'#FFEEDF'
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
      <Form setColaboradores={newColaborador} times={times.map(time => time.nome)}/>
      <ShowCollaborators times={times} setTimes={setTimes} colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      <Footer/>
    </div>
  );
}

export default App;
