import React from "react";
import "./styles.css";
import Lottie from "react-lottie";
import animationData from "./lotties/celebration";

export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="bar">16 October 2024 Nishant Raj</div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
