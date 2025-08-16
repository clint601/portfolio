import { Route, Routes } from "react-router" 




import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Footer from "./components/Footer"
import Error from "./components/Error"




const App =()=> {
    return (
        <>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} /> 
        <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
        </>
    )
    
}


export default App