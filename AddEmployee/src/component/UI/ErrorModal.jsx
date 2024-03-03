import React from 'react'
import Card from './Card'
import Button from './Button'

const ErrorModal = (props) => {
  return (
    <div  className='fixed top-1/4 left-0 flex justify-center mx-auto w-full z-50'>
        <div className='backdrop-blur-sm bg-white/30 fixed w-screen
             h-screen top-0' 
             onClick={props.onConfirm}></div>
         <div className='w-[36rem] p-0 z-20'>
            
         <Card >
                <header className='bg-red-700 p-4 text-white rounded-t-xl '>
                    <h2 className='text-center text-xl text-white'>{props.error?.title}
                    </h2>
                </header>
                <section className='p-4'>{props.error?.message}</section>
                <footer className='p-4 flex justify-end'>
                    <Button onClick = {props.onConfirm}>Tamam</Button>
                </footer>
         </Card>
         </div>
    </div>
   
  )
}

export default ErrorModal