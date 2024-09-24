import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedHeading = () => {
  // Create a ref for the element where the typing will happen
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize the Typed.js library with options
    const typed = new Typed(typedElement.current, {
      strings: [ 
        "Health Services", 
        "Compassionate Care", 
        "Wellness Support",
        "Everything With Love, Care and Support"
      ],
      typeSpeed: 50,      // Speed of typing
      backSpeed: 30,      // Speed of deleting
      startDelay: 500,    // Delay before typing starts
      backDelay: 1500,    // Delay before backspacing
      showCursor: true,  // Hide the blinking cursor
      loop: false,         // Set to true to keep repeating
    });

    // Destroy the Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-2xl font-bold text-center mb-8 mt-2">
        <span> We Provide </span>
      <span ref={typedElement} />
    </div>
  );
};

export default TypedHeading;
