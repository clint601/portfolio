import { Route, Routes } from "react-router" 




import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Error from "./components/Error"




const App =()=> {
    return (
        <>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
        </>
    )
    
}


export default App