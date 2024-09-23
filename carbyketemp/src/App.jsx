import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import FilterBox from "./filterBox/FilterBox";
import FilterResponsePage from "./filterBox/FilterResponsePage";
import FilterDetailsBox from "./filterBox/filterDetailsBox";

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
    <Navbar theme={theme} setTheme={setTheme} />
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={
          <>
            <Hero theme={theme} />
            {/* <About /> */}
            <FilterBox theme={theme} />
            {/* <Services /> */}
            <CarList />
            {/* <Testimonial /> */}
            {/* <Contact /> */}
          </>
        } />

        {/* Route for the list page */}
        <Route path="/list" element={
          <>
            <FilterResponsePage theme = {theme} />
          </>
        } />

         <Route path="/list/:id" element={
          <>
          <FilterDetailsBox theme = {theme}/>
          </>
         }/>

      </Routes>
        <Footer />
    </div>
  </Router>
  );
};

export default App;
