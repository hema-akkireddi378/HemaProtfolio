import Header from './Header'
import About from './Header/About'

import MainContent from './MainContent'
import Footer from './Footer'
import { Routes,Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Internships from './Header/Internship'
import Projects from './Header/Projects'
import Certifications from './Header/Certifications'

function App() {
 

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<MainContent/>}></Route>
     <Route path='/About' element={<About/>}></Route>
     
     <Route path='/Internships'element={<Internships/>}></Route>
     <Route path='/Projects' element={<Projects/>}></Route>
     <Route path='/Certifications'element={<Certifications/>}></Route>
    </Routes> 
    <Footer/>
    </BrowserRouter>
  )
}

export default App
