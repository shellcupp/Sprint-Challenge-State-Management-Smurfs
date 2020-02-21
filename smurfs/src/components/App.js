import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Smurf from './Smurf'
import AddSmurfForm from "./AddSmurfForm";

function App() {
  const dispatch = useDispatch();

  const postNewSmurf = newSmurf => {
   dispatch(postSmurf(newSmurf))
  }

    return (
      <div className="App">
        <h1>SMURFS!</h1>
      <Smurf />
      <AddSmurfForm
      postNewSmurf={postNewSmurf}
      />
        
      </div>
    );
  }


export default App;
