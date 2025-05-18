import Home from "./pages/home/home"
import Imobi from "./pages/imobi/imobi"
import Login from "./pages/login/Login"

import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/anuncios" element={<Imobi />} />
        </Routes>
 
      </BrowserRouter>
    </div>
     
   
  )
}

export default App
