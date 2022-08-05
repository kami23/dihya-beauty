import "./App.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { H1 } from "react-bootstrap";
import logo from "./assets/logo.png";
function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };
  useEffect(() => {
    // Inner Page height for mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // GSAP animation
    let tl = gsap.timeline();
    const homeAnimation = (animation) => {
      tl.to(".ball-intro", {
        duration: 2,
        y: "100vh",
        ease: "bounce.out",
      })
        .to(".ball-intro", {
          duration: 0.7,
          scale: 30,
          ease: "power3.out",
          onComplete: animation,
        })
        .from(".after-animation", {
          duration: 0.3,
          opacity: 0,
          ease: "power3.out",
        });
    };
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {/* <AnimatePresence exitBeforeEnter>
        {animationComplete === false && (
          <div className="intro">
            <motion.div className="ball-intro"></motion.div>
          </div>
        )}
        <div className="after-animation">
          <h1 className="brand-name text-center">Karma</h1>
        </div>
      </AnimatePresence> */}
      <div>
        <img className="brand-img" src={logo} />
      </div>
    </>
  );
}

export default App;
