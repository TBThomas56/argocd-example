import { useState } from "react";
import argoLogo from "./assets/argo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://argo-cd.readthedocs.io/en/stable/" target="_blank">
          <img src={argoLogo} className="logo" alt="Argo logo" />
        </a>
      </div>
      <h1>ArgoCD and DAQ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Hello World from a Deployed Instance of This Webpage
      </p>
    </>
  );
}

export default App;
