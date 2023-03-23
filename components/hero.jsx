import React, { useState, useEffect, Suspense, lazy } from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SplineComponent from "./SplineComponent";
// const SplineComponent = lazy(() => import('./SplineComponent'));

const heroLogoVariants = {
  hidden: {
    x: "calc(100vw - 85vw)",
    opacity: 0,
    rotate: -360,
    originX: 0.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
};


const heroTextVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const imgsVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    yoyo: Infinity,
    delay: 2,
    duration: 1,
    type: "Inertia",
  },
};

const Hero = () => {
  const [animateStart, setAnimateStart] = useState(true);
  React.useState(() => {
    setTimeout(() => setAnimateStart(true), 1000);
  }, []);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="min-h-screen pt-24 flex flex-col justify-center relative bg-black">
      <video autoPlay loop muted className="bg-vid"><source src="./assets/Yash2023f.mp4" type="video/mp4" /> </video>

    </div>
  );
};

export default Hero;
