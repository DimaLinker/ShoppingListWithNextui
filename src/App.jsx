import './App.css';
import {useState} from "react";
import {v4 as V4} from 'uuid'
import {FormListe} from "./components/Einkaufsliste/FormListe.jsx";
import {EinkaufsListe} from "./components/Einkaufsliste/EinkaufsListe.jsx";




function App() {

    const [listed, setListed] = useState([])
    const addNewList = (text) => {
        const list = {
            text: text,
            id: V4()
        }
        setListed([...listed, list])
    }

  return (
      <div>
          <h1>Meine Einkaufsliste</h1>
          <FormListe addList={addNewList}/>
          <EinkaufsListe list={listed}/>
      </div>
  )
}

export default App
