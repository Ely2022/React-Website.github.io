import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App (){
  let pages
  switch (window.location.pathname) {
    case "/":
      pages = <Home />
      break

    case "/about":
      pages = <About />
      break
    
    case "/contact":
      pages = <Contact />
      break
    default :
      return null 
  
  }

  return (
    <>
    <Navbar />
    <div className="container">
    {pages}
    </div>
    </>
  )
}

export default App