import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Header } from "./components/Header/Header";
import { About } from "./components/pages/About/About";
import { Contacts } from "./components/pages/Contacts/Contacts";
import { Main } from "./components/pages/Main/Main";
import { getInitState } from "./custom/localStorage";
import { dataEN, dataRU } from "./data/data";

function App() {
  const location = useLocation()
  const [signal, setModal] = useState(false)
  const [lang, setLang] = useState(getInitState())

  let data;

  if(lang === "EN") {
    data = dataEN;
  } else {
    data = dataRU;
  }

  const switchLang = () => {
    setLang(prev => {
      const opposite = prev === "EN" ? "RU" : "EN"
      window.localStorage.setItem('lang', JSON.stringify(opposite))
      return opposite
    })
  }

  return (
  <>
      <Header setModal={setModal} signal={signal} header={data.header} modal={data.modal} switchLang={switchLang} lang={lang}/>
      <div className="main_container">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" unmountOnExit timeout={0}>
            <Routes location={location}>
              <Route exact path="/" element={<Main main={data.main}/>}/>
              <Route exact path="about" element={<About about={data.about}/>}/>
              <Route exact path="contacts" element={<Contacts setModal={setModal} contacts={data.contacts}/>}/>
            </Routes>
        </CSSTransition>
      </TransitionGroup>
      </div>
    </>
  )
}

export default App;
