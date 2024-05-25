import NavBar from "@/Components/NavBar";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const navOpen = () => setNav(true);
  const navClose = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
