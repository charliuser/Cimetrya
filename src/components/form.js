import { useState } from "react";

export default function Form(){
  const [characters, setCharacters] = useState(null);
  // Consumimos la API de manera asyncrona
  const resApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
      const characterApi = await api.json();
      console.log(characterApi);
  
      setCharacters(characterApi.results);
  }
}