import React, { useState } from "react";
import AddWorker from "./Components/Workers/AddWorker";
import WorkerList from "./Components/Workers/WorkerList";

function App() {
  const [workers,setWorkers]=useState([])
  return (
    <React.Fragment>
      <h1 className="text-white text-center ms-6 text-3xl">Maaş Otomasyonu</h1>
    <AddWorker setWorkers={setWorkers}/>
    <WorkerList workers={workers} setWorkers={setWorkers}/>
    </React.Fragment>
  );
}

export default App;
