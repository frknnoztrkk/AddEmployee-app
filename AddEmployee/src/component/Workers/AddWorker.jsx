import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'


function AddWorker() {

   const [enteredWorkerName , setEnteredWorkerName] = useState("");
   const [enteredWage , setEnteredWage] = useState("");

   const minimumWage = 17000;

   const addWorkerHandler =(e) => {
    e.preventDefault();// sayfa yenilenmesini engelleme

    if(enteredWorkerName.trim().length ===0 || enteredWage.trim().length ===0 ) {
      return;
    }

    if (+enteredWage < minimumWage) {
      return;
    }
    setEnteredWage("");
      setEnteredWorkerName("");
     console.log(enteredWorkerName,enteredWage)
    
   }
   


  return (
    <Card >
      <form className='flex flex-col gap-y-2' onSubmit={addWorkerHandler}>
        <label htmlFor="name"className='font-medium'>Çalışan İsmi</label>

        <input type="text" className='max-w-[40rem] w-full mx-auto border p-2' placeholder='Çalışan ismi giriniz' id='name' onChange={(e) => setEnteredWorkerName(e.target.value)}
        value={enteredWorkerName}/>
        

        <label htmlFor="wage" className='font-medium'> Maaş Miktarı</label>

        <input type="number" className='max-w-[40rem] w-full mx-auto border p-2'placeholder='Maaş miktarı giriniz' id='wage' onChange={(e) => setEnteredWage(e.target.value)}
        value={enteredWage}/>

        <Button className="mt-2" type="submit"> Ekle</Button>
        
    </form>
    </Card>
  )
}

export default AddWorker