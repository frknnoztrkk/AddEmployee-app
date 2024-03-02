import React, { useState } from 'react'
import AddWorker from './component/Workers/AddWorker'
import WorkerList from './component/Workers/WorkerList'

function App() {

  const [workers,setWorkers] = useState([]);

  return (
    <div className='App'>
      <h1 className='text-white text-center mt-6 text-3xl'>Maaş Otomasyonu</h1>
      <div className='mt-10'>
        <AddWorker setWorkers ={setWorkers}/>
        <WorkerList workers = {workers} setWorkers={setWorkers}/>
        </div>
    </div>
  )
}

export default App

