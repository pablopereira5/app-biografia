import logo from './logo.svg';
import './App.css';
import Testimonios from './components/Testimonios';


function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Biografia de los jugadores CAMPEONES DEL MUNDO</h1>
      <Testimonios 
      nombre='Lionel'
      apellido='Messi'
      imagen='messi10'
      cargo='Futbolista'
      equipo='PSG'
      testimonio='Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia'
      />
      <Testimonios 
      nombre='Enzo'
      apellido='Fernandez'
      imagen='enzo5'
      cargo='Futbolista'
      equipo='CHELSEA'
      testimonio='Enzo Jeremías Fernández es un futbolista argentino que juega como centrocampista en el Chelsea F. C. de la Premier League. Su carrera como futbolista profesional comenzó en el 2020, en Club Atlético River Plate'
      />
      <Testimonios 
      nombre='Angel'
      apellido='Di María'
      imagen='angel11'
      cargo='Futbolista'
      equipo='JUVENTUS'
      testimonio='Ángel Fabián Di María es un futbolista argentino. Juega de extremo en la Juventus de Turín de la Serie A de Italia.'
      />
      </div>
    </div>
  );
}

export default App;
