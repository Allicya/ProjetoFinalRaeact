import { Route, Routes } from "react-router-dom"
import Banner from "./componentes/Banner"
import Footer from "./componentes/Footer"
import Menu from "./componentes/Menu"
import Sobre from "./Pages/about"
import Inicio from "./Pages/Home"
import Contato from "./Pages/contacts"
import Comentarios from "./Pages/coments"


function App() {
  
  return (
    <div>
      <Menu/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/comentario" element={<Comentarios/>}/>
      </Routes>
      <Footer/>  
    </div>
  )

}

export default App
