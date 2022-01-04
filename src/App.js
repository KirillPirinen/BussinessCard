import { useState } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Header } from "./components/Header/Header";
import { About } from "./components/pages/About/About";
import { Contacts } from "./components/pages/Contacts/Contacts";
import { Main } from "./components/pages/Main/Main";

function App() {
  const location = useLocation()
  const [modal, setModal] = useState(false)
  return (
  <>
      <Header setModal={setModal} modal={modal}/>
      <div className="main_container">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" unmountOnExit>
            <Routes location={location}>
              <Route exact path="/" element={<Main/>}/>
              <Route exact path="about" element={<About/>}/>
              <Route exact path="contacts" element={<Contacts setModal={setModal}/>}/>
            </Routes>
        </CSSTransition>
      </TransitionGroup>
      </div>
    </>
  )
}

export default App;
