import { useState } from 'react'
import './App.css'
import chuck from './assets/chuc_desktop.svg'
import DropDown from './components/DropDown'
import Buttons from './components/Buttons'
import Riquadro from './components/Riquadro'



function App() {
  const [categories, setCategories] = useState([])
  const [joke, setJoke] = useState("")

  function RenderCategories(){
      let url = 'https://api.chucknorris.io/jokes/categories'

    let promise = fetch(url)

    promise.then(
        response => response.json()
    ).then(
        data => {
          data.forEach(element => {
            let obj = data.map(function(item, index){
              return {
                id: index,
                value: item
              }
            })
            setCategories(obj)
          });
        }
    )
  }

  function JokeDisplay(){
      let url = `https://api.chucknorris.io/jokes/random`
      let promise = fetch(url)
      
      promise.then(
        response => response.json()
      ).then(
        data => setJoke(data.value)
      ) 
  }

  return (
    <div className="App">
      <div id='container'>
      <h1 id='title'>Webapp API Chuck Norris</h1>
      <p id='paragraph'>Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</p>
      <img id='chuck_img' src={chuck}/>
      <DropDown categories={categories} clbk={RenderCategories} />
      {joke != "" &&
        <Riquadro joke={joke}/>
        } 
      <Buttons text="carica joke" variant={"active"}  styles={"margin-top-75"} clbk={() => JokeDisplay()}/>
      <Buttons text="copia testo" variant={joke === "" ? "disabled" : "active"} styles={"margin-top-20"}/>
      </div>
    </div>
  )
}

export default App
