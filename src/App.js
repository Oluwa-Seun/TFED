import React, { useEffect } from "react";
//add useState to useEffect from react 
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

//import Loader from "../pages/Loader";
import BackgroundAnimation from "../components/BackgroundAnimation";
//import Particles from "react-tsparticles";
//New test effect on this line.
/*
import  {useState} from "react";
import {useInterval} from "react-use";
import styled from 'styled-components';
//
function RainDrops() {
  const [emojisToRender, setEmojisToRender] = useState([{offset: 0, key: 0, emoji: ''}]);
  useInterval(() => {
    if(setEmojisToRender.length > 20) {
      emojisToRender.shift(console.log());
    }
    const offset = Math.floor(Math.random() * 1000);
     const key = offset + Math.random() * 100000;
     const emoji = ['⚕︎', '🔥','⚛︎',];
     emojisToRender.push({offset, key, emoji,});
     setEmojisToRender([...emojisToRender]);
  }, 500);
   //
  return (
    <SuperContainer>
      {emojisToRender.map(({key, emoji, offset}) =>{
      return(
        <EmojiContainer key={key} offset={offset}>
          {emoji}
        </EmojiContainer>
      )
    })}
    </SuperContainer>
  )
}
const SuperContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const EmojiContainer = styled.div`
  @keyframes falldown {
    0% { margin-top: 0; }
    100% { margin-top: 600px; }
  }
  position: absolute;
  top: 100px;
  left: ${props => props.offset}px;
  font-size: 20px;
  animation-name: falldown;
  animation-duration: 4s;
`;
//End line of test
*/
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);


//Logic for Pre-Lodder 





//End of Logic 
export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  /*const [loading, setLoding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 2500);
  }, []);*/
  return (
    //new test line { isLoading===true?} <Loader />
      <Router basename={process.env.PUBLIC_URL}>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={37}
            outerSize={35}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5} />
        </div>
        <div className="home2">
         <BackgroundAnimation />
        </div>
          <ScrollToTop>
          <Headermain />
          <AppRoutes />
        </ScrollToTop>
      </Router>
  );
}
