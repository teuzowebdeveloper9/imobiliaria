import Banner from "./components/banner/banner"
import Copyright from "./components/copyright/copyright"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Home from "./pages/home/home"
import Imobi from "./pages/imobi/imobi"

function App() {
 

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Home></Home>
      <Imobi></Imobi>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
     
   
  )
}

export default App
