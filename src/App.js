import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

function App() {
  const [backgroudColor, setBackgroundColor] = useState("red");
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };
  // const bounceTransition = {
  //   y: {
  //     duration: 0.4,
  //     yoyo: Infinity,
  //     ease: "easeOut",
  //   },
  //   backgroundColor: {
  //     duration: 0,
  //     yoyo: Infinity,
  //     ease: "easeOut",
  //     repeatDelay: 0.8,
  //   },
  // };
  useEffect(() => {
    // Inner Page height for mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // GSAP animation
    let tl = gsap.timeline();
    const homeAnimation = (animation) => {
      tl.to(".ballIntro", {
        duration: 2,
        y: "100vh",
        ease: "bounce.out",
      })
        .to(".ballIntro", {
          duration: 1,
          scale: 30,
          ease: "power3.out",
          onComplete: animation,
        })
        .from(".after-animation", {
          duration: 0.8,
          opacity: 0,
          ease: "power3.out",
        });
    };
    homeAnimation(completeAnimation);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {animationComplete === false && (
        <div className="Intro">
          <motion.div className="ballIntro"></motion.div>
        </div>
      )}
      <div className="after-animation"></div>
    </AnimatePresence>
  );
}

export default App;
