import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from './result';
import Few from './few';
import Home from './home';
import How from './how';
import About from './about';






function App(){
  return(
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <BrowserRouter>
    <Routes>
      
        <Route index path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/few' element={<Few />} />
        <Route path='/how' element={<How />} />
        <Route path='/about' element={<About />} />
        
        
   
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App