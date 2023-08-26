import React from 'react'
import { useState,useEffect } from "react";
// import {  BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from "./Components/SideBar";
import HomePage from "./Pages/HomePage";
// import AboutPage from './Pages/AboutPage';
// import ResumePage from './Pages/ResumePage';
// import PortfolioPage from './Pages/PortfolioPage';
// import BlogsPage from './Pages/BlogsPage';
// import ContactPage from './Pages/ContactPage';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Routes } from "react-router";
import { IconButton, Switch } from "@mui/material";
import routes from './routes';
// import CertificationPage from "./Pages/CertificationPage";

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    if (typeof document !== 'undefined') {
      document.documentElement.className = theme;
    }
   
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }
  return (
    // <BrowserRouter>
    <div className="App">
    <Sidebar navToggle={navToggle} theme={theme} />

    <div className="theme">
      <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size="medium"
              onClick={themeToggler}
              
            />
          </div>
        </div>
    </div>

    <div className="ham-burger-menu">
      <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
      </IconButton>
    </div>

    <MainContentStyled>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
      <Routes>
          {routes.map((route) => {
            const { path, fetchInitialData, component: C } = route;

            return (
              <Route
                key={path}
                path={path}
                element={
                  <C  fetchInitialData={fetchInitialData} />
                }
              />
            );
          })}
          <Route path="*" element={<HomePage />} />
        </Routes>

      {/* <Routes>
        <Route path="/" exact element={<HomePage theme={theme}/>}/>
        {/* <Route path="/about" exact element={<AboutPage theme={theme}/>}/>
        <Route path="/resume" exact element={<ResumePage theme={theme}/>}/>
        <Route path="/portfolios" exact element={<PortfolioPage/>}/>
        <Route path="/blogs" exact element={<BlogsPage/>}/>
        <Route path="/certification" exact element={<CertificationPage/>}/>
        <Route path="/contact" exact element={<ContactPage />}/> */}
      {/* </Routes>  */}

    </MainContentStyled>
</div>
// </BrowserRouter>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;


export default App;
