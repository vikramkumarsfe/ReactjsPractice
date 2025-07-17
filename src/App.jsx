
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ref from "./components/useRef";
import Reducer from "./components/Reducer_hook";
import RadnomPassword from "./components/random_password";
import 'remixicon/fonts/remixicon.css'
import ColorGenerator from "./components/ColorGenerator";
import ModalTest from "./components/ModalTest";
import Drawer from "./components/Drawer";
import 'animate.css';



const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ref" element={<Ref/>} />
          <Route path="/redu" element = { <Reducer />} />
          <Route path="/random" element = {<RadnomPassword/>} />
          <Route path="/color" element= { <ColorGenerator/>}/>
          <Route path="/modal"  element = {<ModalTest/>} />
          <Route path="/drawer" element= {<Drawer/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App