import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
import NavBar from "./components/NavBar"



function App() {

  return (
    <div className="bg-gray-900 w-full h-screen text-white text-3xl">
     
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </div>
  )
}

export default App
