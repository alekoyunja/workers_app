import React, { useState,useEffect } from "react";
import AddWorker from "./Components/Workers/AddWorker";
import WorkerList from "./Components/Workers/WorkerList";

function App() {

  // Girilen veriyi localstorage kaydeder ve kalıcı olur
  const [workers,setWorkers]=useState(localStorage.getItem("workers") 
  ? JSON.parse(localStorage.getItem("workers"))
  :[]
  )
  

  useEffect(()=>{
    console.log("Çalıştı...!")
    localStorage.setItem("workers",JSON.stringify(workers))
      },[workers])

      // useEffect(()=>{
      //   console.log("run ..!");
      // },[workers])

  return (
    <React.Fragment>
      <h1 className="text-white text-center ms-6 text-3xl">Maaş Otomasyonu</h1>
    <AddWorker setWorkers={setWorkers}/>
    <WorkerList workers={workers} setWorkers={setWorkers}/>
    </React.Fragment>
  );
}

export default App;
