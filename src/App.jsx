import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Skulpturer from "./Skulpturer"
import Video from "./Video"
import CV from "./CV"
import Avisudklip from "./Avisudklip"
import Foto from "./Foto"
import Om from "./Om"
import Kontakt from "./Kontakt"

const basePath = import.meta.env.MODE === 'production' ? '/EjgilWestergaard/' : '/';

function UnderConstruction(){
  return <p className="text">Denne hjemmeside er under konstruktion!</p>
}

function ConditionalHeader(){
  const location = useLocation();
  return location.pathname !== "/" ? <Header /> : <UnderConstruction />;
}

function App() {
  console.log("Location: " + location.pathname);
  return <Router basename={basePath}> 
    <ConditionalHeader />
    <Routes>
      <Route path={""} /*element={<Home />}*/ />
      <Route path={"index.html"} element={<Home />} />
      <Route path={"skulpturer"} element={<Skulpturer />} />
      <Route path={"video"} element={<Video />} />
      <Route path={"cv"} element={<CV />} />
      <Route path={"avisudklip"} element={<Avisudklip />} />
      <Route path={"foto"} element={<Foto />} />
      <Route path={"om"} element={<Om />} />
      <Route path={"kontakt"} element={<Kontakt />} />
    </Routes>
  </Router>
}

export default App
