import { useEffect } from 'react'
import './App.css'
import API from "./services/api";

function App() {
    useEffect(() => {
    API.get("/")
      .then((res) => {
        console.log("Backend says:", res.data);
      })
      .catch((err) => {
        console.error("Backend error:", err);
      });
  }, []);

  return <h1>Food Stall Locator 🚀</h1>;
}

export default App
