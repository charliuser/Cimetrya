import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [characters, setCharacters] = useState(null);
  //Consumimos el Api de manera asincrona
  const reqApi = async () => {
    const api = await fetch("https://api.talentotech.cymetria.com/api/v1/blockchain/obtener-estudiantes-aprobados");
    const characterApi = await api.json();
    //Revisamos los datos del json en como ingresar a cada uno de ellos
    console.log(characterApi);
    console.log(characterApi.estudiantes_aprobados[0]);
    console.log(characterApi.estudiantes_aprobados[0].estudiante.num_documento);

    const numD = characterApi.estudiantes_aprobados[0].estudiante.num_documento;

    setCharacters(characterApi.results);
  }

  //Validación para comparar el dato ingresado con la respuesta de la API
  // const handleSubmit = (event) => {

  //   if (this.numD == id.value) {
  //     console.log("son iguales");
  //   } else {
  //     console.log("No son iguales");
  //   }

  // }

  return (
    //Formulario Estudiante Aprobados
    <div className="App">
      <header className="App-header">
        <h1 className="title">Formulario Estudiante Aprobado</h1>
        <form>
          {/* input numero de documento */}
          <div className="input-container">
            <label>Número de documento</label>
            <input type="password" name="id" required />
          </div>
        </form>
        {/* botón para mostrar respuesta de API en consola  */}
        <button onClick={reqApi} className="btn-search">Consultar Estudiante</button>
      </header>
    </div>
  );
}

export default App;
