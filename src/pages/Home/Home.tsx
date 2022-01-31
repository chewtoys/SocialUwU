import React, { useEffect, useState } from "react";
import MiddleStuff from "../../components/MiddleStuff/MiddleStuff";
import Navbar from "../../components/Navbar/Navbar";
import NavbarDark from "../../components/NavbarDark/NavbarDark";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useState<string>("");
  console.log(theme === "dark");
  useEffect(() => {
    const themeboi = localStorage.getItem("theme");
    if (!themeboi) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(themeboi);
    }
  }, []);
  useEffect(() => {
    document.title = "SocialUwU - Home";
  }, []);
  return (
    <div>
      {theme === "dark" ? <NavbarDark /> : <Navbar />}
      <main>
        <div className="container">
          <RightSidebar />
          <MiddleStuff />
          <LeftSidebar />
        </div>
      </main>
    </div>
  );
};

export default Home;
