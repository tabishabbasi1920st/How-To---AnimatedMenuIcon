import { useState } from "react";
import "./index.css";

const AnimatedMenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`container ${isOpen && "change"}`}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default AnimatedMenuIcon;
