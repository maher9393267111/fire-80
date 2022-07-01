import React from "react";

import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
const Mobile = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // when side ba fixed  stop page scroll
    const body = document.querySelector("body");

//setOpen(true);

if (window.innerWidth > 799) {
  setOpen(false);  // true ✔
  console.log("📌📌📌79999");
}



    // resize event
    window.addEventListener("resize", () => {
      if (window.innerWidth > 799) {
        setOpen(false);  // true ✔
        console.log("📌📌📌79999");
      }
    });

    if (isOpen) {    // !isOpen ✔
      // hide all page content
      const content = document.querySelector(".content");
      content.style.display = "none";
    } else {
      // show all page content
      const content = document.querySelector(".content");
      content.style.display = "block";
    }
  }, [isOpen]);

  return (
    <div>
      <div className=" flex justify-between mx-6 my-6">
        {/* ----Logo-- */}

        <div>
          <img
            className="mt-[6px]"
            src="https://www.jsmastery.pro/_next/static/media/jsmPro.4dd0d4a9.svg"
            alt=""
          />
        </div>

        {/* --hamburger menu-- */}

        <div>
          <div>
            <div className=" absolute right-[53px] mr-4">
              <Hamburger
                color="#4FD1C5"
                size={32}
                className="w-22 h-22"
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
          </div>
        </div>

        {/* -----fixed menu items bar--- */}

        <div>
          {/* ----fixed-- */}

          <div
            className={`${
              !isOpen ? "translate-x-[100%]" : "translate-0"
            }  transition-all duration-500 opacity-1 left-0 right-0 bottom-0 top-[80px]  fixed  bg-white  shadow-xl  `}
          >
            {/* ----sidebar Content---- */}

            <div>
              <div>
                {/* ----header--- */}

                <div>
                  <h1 className=" mt-12 ml-6 text-xl font-bold">Courses</h1>
                </div>

                {/* ----courses list--- */}

                <div className="mt-4 mb-6">
                  <ul>
                    <li className="my-4 w-[88%]">
                      {" "}
                      <div>
                        <div className=" flex gap-6">
                          {/* ----course icon-- */}

                          <div>
                            <img
                              className="w-10 h-10 rounded-full ml-6 mt-[3px]"
                              src="https://www.jsmastery.pro/_next/static/media/laptop-nav.f5c9787a.svg"
                              alt=""
                            />
                          </div>

                          {/* ---course desc--- */}
                          <div>
                            <p className="text-xl">
                              Build an AI Powered Movie Application and Master
                              React
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="my-4">
                      {" "}
                      <div>
                        <div className=" flex gap-6 w-[88%]">
                          {/* ----course icon-- */}

                          <div>
                            <img
                              className="w-10 h-10 rounded-full ml-6 mt-[3px]"
                              src="https://www.jsmastery.pro/_next/static/media/blockchain-nav.95f962f7.svg"
                              alt=""
                            />
                          </div>

                          {/* ---course desc--- */}
                          <div>
                            <p className="text-xl">
                              Build an AI Powered Movie Application and Master
                              React
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="my-4 w-[88%]">
                      {" "}
                      <div>
                        <div className=" flex gap-6">
                          {/* ----course icon-- */}

                          <div>
                            <img
                              className="w-10 h-10 rounded-full ml-6 mt-[3px]"
                              src="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.8a201547.png&w=32&q=75"
                              alt=""
                            />
                          </div>

                          {/* ---course desc--- */}
                          <div>
                            <p className="text-xl">
                              Build an AI Powered Movie Application and Master
                              React
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
