"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faMagnifyingGlass,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function Navbaar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const kawkab = "./kawkab.png";
  const best = "./best.webp"; // Path to your image

  const navLinks = [
    { name: "LATEST", description: "Latest news and updates" },
    { name: "VIDEO", description: "Watch the latest videos" },
    { name: "FIXTURES RESULTS", description: "Match results and fixtures" },
    { name: "TEAM", description: "Information about the team" },
    { name: "TICKETS", description: "Buy match tickets" },
    { name: "FANS", description: "Join our fan community" },
    { name: "SHOP", description: "Official shop for merchandise" },
  ];

  return (
    <motion.div
      className="w-full h-[155px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: "#ffffff",
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div
        className={`transition-colors duration-500 ${
          isHovered ? "text-black" : "text-white"
        }`}
      ></div>
      <div className="flex justify-center text-center -mt-11">
        <img src={kawkab} alt="logo" width={160} />
      </div>

      <div
        className={`transition-colors duration-500 ${
          isHovered ? "text-black" : "text-white"
        }`}
      >
        <div className="flex w-30 justify-end space-x-14 right-8 top-[12%] absolute cursor-pointer">
          <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
          <FontAwesomeIcon
            className="text-xl"
            icon={faList}
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          />
        </div>
      </div>

      {/* Page MENU*/}

      {isMenuOpen && (
        <div className="absolute top-[-40px] left-0 w-screen h-[800px] bg-white text-black p-5 z-50 cursor-pointer">
          <div className=" w-screen px-[45%] -mt-8">
            <img src={kawkab} alt="Menu" width={160} />{" "} 
          </div>
          <div className="flex justify-between items-center mr-10 absolute">
            <FontAwesomeIcon
              className="text-2xl cursor-pointer"
              icon={faTimes}
              onClick={() => setIsMenuOpen(false)} // Close menu
            />
          
          </div>

              {/* LISTE CLUBE */}          

          <ul className="container mx-auto">
            <li className="flex items-center justify-between px-[8%] py-8 ">
              <div className="divide-y-2 divide-y-reverse divide-red-500 w-[300px]">
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[67%]"
                  />
                  <span className="font-bold text-xl py-5">CLUB</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[67%]"
                  />
                  <span>Club Partners</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[67%]"
                  />
                  <span>Safeguarding </span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute  right-[67%]"
                  />
                  <span>Job Vacancies</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute  right-[67%]"
                  />
                  <span>Media</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute  right-[67%]"
                  />
                  <span>Our Values</span>
                </div>

                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[67%]"
                  />
                  <span>History</span>
                </div>
              </div>
            </li>
          </ul>

                {/* LISTE COMMUNITY */}

          <ul className="container mx-auto">
            <li className="flex items-center justify-between px-[8%] py-10">
              <div className="divide-y-2 divide-y-reverse divide-red-500 w-[330px]">
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[65%]"
                  />
                  <span className="font-bold text-xl py-5">COMMUNITY</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[65%]"
                  />
                  <span>Community</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[65%]"
                  />
                  <span>Brentford FC Community Sports Trust</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[65%]"
                  />
                  <span>Training Ground Development</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[65%]"
                  />
                  <span>Heart of West London</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[65%]"
                  />
                  <span>Sustainability</span>
                </div>
              </div>
            </li>
          </ul>
        
                {/* LISTE STIDIUM */}

          <ul className="container mx-auto absolute top-[100px] left-[400px] py-[30px]  ">
            <li className="flex items-center justify-between px-[8%] py-10">
              <div className="divide-y-2 divide-y-reverse divide-red-500 w-[300px]">
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[68%]"
                  />
                  <span className="font-bold text-xl py-5">STIDIUM</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[68%]"
                  />
                  <span>Gtech Community Stadium</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[68%]"
                  />
                  <span>Stadium Tours</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[68%]"
                  />
                  <span>Residents' Information</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[68%]"
                  />
                  <span>Safety & Security</span>
                </div>
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[68%]"
                  />
                  <span>Families</span>
                </div>
              </div>
            </li>
          </ul>

                {/* LISTE CONFERENCE*/}

          <ul className="container mx-auto absolute left-[400px] top-[500px] ">
            <li className="flex items-center justify-between px-[8%] py-10">
              <div className="divide-y-2 divide-y-reverse divide-red-500 w-[300px]">
                <div className="flex items-center py-3">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mr-2 absolute right-[68%]"
                  />
                  <span className="font-bold text-xl py-5">
                    CONFERENCE & EVENTS
                  </span>
                </div>
              </div>
            </li>
          </ul>

                {/* IMAGE DE MENUE */}

          <div className="absolute top-[199px] left-[850px] bg-cover pointer-cursor ">
            <img src={best} alt="logo" width={350} className="h-[275px]" />
            <div className="absolute top-0 left-0 w-[350px] h-full flex items-center justify-center bg-black bg-opacity-30">
              <a
                href="#"
                className="text-white text-3xl font-bold ml-8 mt-[25%]"
              >
                GOALKEEPER KIT 24/25
              </a>
            </div>
          </div>
        </div>
        
      )}

            {/* NAVBAR DE PAGE HOME */}

      <nav className="flex justify-center space-x-7 font-bold">
        {navLinks.map((link, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <a
                href="#"
                className={`transition-colors duration-500 ${
                  isHovered ? "text-black" : "text-white"
                }`}
              >
                {link.name}
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-screen border-red-700 h-[400px] mt-5 bg-red-700">  
              <ul className="container mx-auto">
              <li className="flex items-center justify-between py-5 px-20">
                <div className="divide-x-2 divide-white">
                <div className="">{link.name}</div>
                </div>
              </li>
              </ul>
            </HoverCardContent>
          </HoverCard>
        ))}
      </nav>
    </motion.div>
  );
}

export default Navbaar;
