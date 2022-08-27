import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "YOUR_APPLICATION_ID";
  const APP_KEY = "YOUR_APPLICATION_KEY";

  useEffect(() => {
    getRecipes();
    
  }, []);

  
  return (
    <div className="App">
      
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
