import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../../m/useScroll";
import { xAnimation, x_Animation } from "../../m/anim";
const Bonus = () => {
  const [element, controls] = useScroll();

  return (
    <div ref={element}>
      <div>
        <div>
          {/* header--- */}

          <div className=" ">
            <h1 className="text-center xs:text-[35px] w-2/3 xs:m-auto font-bold lg:w-[555px] lg:text-[47px]">
              Free <span className="text5">Bonus</span> You’ll Get to Speed Up
              Your<span className="text5"> Growth </span>
            </h1>
          </div>

          {/* - content-- */}

          <div>
            {/* ----flex --- */}

            <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <motion.div
                  className=""
                  //   whileInView={{ x: [-180, 0], opacity: [0, 1] }}
                  variants={xAnimation}
                  animate={controls}
                  transition={{ duration: 1.5 }}
                >
                  <div>
                    <img
                      src="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftech-resume.7f1700de.png&w=1200&q=75"
                      alt=""
                    />
                  </div>
                </motion.div>
              </div>

              <div>
                <div>
                  {/* ----here--- */}

                  <motion.div
                    className=""
                    //  whileInView={{ x: [180, 0], opacity: [0, 1] }}
                    variants={x_Animation}
                    animate={controls}
                    transition={{ duration: 1.5 }}
                  >
                    <div className="my-12 mx-8">
                      {/* --title-- */}
                      <div>
                        <h1 className="font-semibold">FREE BONUS #1</h1>
                      </div>

                      <div>
                        <div>
                          <h2 className="text-3xl font-bold w-[77%]">
                            The Ultimate Tech Resume Practical eBook
                          </h2>
                        </div>

                        <div>
                          <div className="text-xl font-semibold">
                            <span className="inline-block mr-4 relative top-[4px]">
                              <img
                                src="https://www.jsmastery.pro/_next/static/media/tick02.08fa00b5.svg"
                                alt=""
                              />
                            </span>
                            Present yourself as the best fit for the role
                          </div>

                          <div className="text-xl my-4 font-semibold">
                            <span className="inline-block mr-4 relative top-[4px]">
                              <img
                                src="https://www.jsmastery.pro/_next/static/media/tick02.08fa00b5.svg"
                                alt=""
                              />
                            </span>
                            Showcase the best Portfolio, CV & GitHub Profile
                          </div>

                          <div>
                            <div>
                              <p className="text-xl font-semibold">
                                This 30-page hands-on eBook curated from the
                                insights of some of the best hiring managers in
                                the industry will help to raise you up above
                                other applicants.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* ------Price cart--- */}

            <div className="my-12">
              <div>
                <div className="    shadow-2xl  min-h-[400px] border-2 w-[450px] mx-auto overflow-hidden">
                  <div>
                    {/* --headere--- */}

                    <div>
                      {/* ---flex--- */}

                      <div className=" flex justify-between relative">
                        <div>
                          <h1 className="ml-6 mt-6 font-semibold    text-[#1363DF]">
                            BEST PRICE
                          </h1>
                        </div>

                        <div className=" relative w-[133px] h-[8px] top-[36px] rotate-45 right-[-35px] text-white font-bold text-center ">
                          <div className=" bg-blue-500  ">
                            <p>Best Price</p>
                          </div>
                        </div>
                      </div>

                      <div className=" mt-4">
                        <div>
                          <h1 className=" font-bold text-[49px] ml-6">$247</h1>
                        </div>

                        {/* ----list--- */}

                        <div>
                          <div className="card-items">
                            {/* --One-- */}

                            <div>
                              <h1 className="text-xl font-semibold ml-4">
                                {" "}
                                <span className="inline-block relative top-[3px] mr-4">
                                  {" "}
                                  <img
                                    src="https://www.jsmastery.pro/_next/static/media/tick.d1cf6041.svg"
                                    alt=""
                                  />{" "}
                                </span>
                                30-day guarantee{" "}
                              </h1>
                            </div>

                            <div>
                              <h1 className="text-xl font-semibold ml-4">
                                {" "}
                                <span className="inline-block relative top-[3px] mr-4">
                                  {" "}
                                  <img
                                    src="https://www.jsmastery.pro/_next/static/media/tick.d1cf6041.svg"
                                    alt=""
                                  />{" "}
                                </span>
                                Access to 24/7 community{" "}
                              </h1>
                            </div>

                            <div>
                              <h1 className="text-xl font-semibold ml-4">
                                {" "}
                                <span className="inline-block relative top-[3px] mr-4">
                                  {" "}
                                  <img
                                    src="https://www.jsmastery.pro/_next/static/media/tick.d1cf6041.svg"
                                    alt=""
                                  />{" "}
                                </span>
                                Free lifetime course updates{" "}
                              </h1>
                            </div>

                            <div>
                              <h1 className="text-xl font-semibold ml-4">
                                {" "}
                                <span className="inline-block relative top-[3px] mr-4">
                                  {" "}
                                  <img
                                    src="https://www.jsmastery.pro/_next/static/media/tick.d1cf6041.svg"
                                    alt=""
                                  />{" "}
                                </span>
                                Certificate of completion
                              </h1>
                            </div>

                            <div>
                              <h1 className="text-xl font-semibold ml-4">
                                {" "}
                                <span className="inline-block relative top-[3px] mr-4">
                                  {" "}
                                  <img
                                    src="https://www.jsmastery.pro/_next/static/media/tick.d1cf6041.svg"
                                    alt=""
                                  />{" "}
                                </span>
                                Best practices to apply
                              </h1>
                            </div>
                            

{/* -button-- */}

<div>

    <div>
        <button className="inline-block bg-[#11052C] font-bold text-white mx-auto p-4 rounded-full w-[74%] text-center  ml-12 mr-12 "><span className="inline-block"> <img src="https://www.jsmastery.pro/_next/static/media/bag.a652adfe.svg" alt="" /></span>Buy The Course</button>
    </div>
</div>



                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
