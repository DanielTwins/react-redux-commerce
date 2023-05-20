import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Remove the listener on cleanup
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 20px;
  padding: 10px;
  background-color: #f2701d;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
