"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import MobileMenu from "@/components/MobileMenu";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { IoMdMenu, IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
function NavBarComp() {
  const [isSticky, setSticky] = useState(false);
  const [islogin, setislogin] = useState(false);
  const router = useRouter();
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          isSticky ? "sticky   shadow-lg " : "absolute"
        } top-0 lg:z-50 w-full transition-all duration-500 bg-base-100`}
        id="navBar"
      >
        <div className=" border-b  hidden lg:grid lg:grid-cols-12 justify-center items-center">
          <div className="w-fit col-span-2">
            <div
              className="flex flex-row space-x-2 pl-10 cursor-pointer items-center"
              onClick={() => router.push("/")}
            >
              {/* <SiteLogo /> */}
              <div className="text-start object-contain h-full ">
                {/* <p className="text-3xl font-semibold text-base-content">
                  WEALTHTRUST
                </p> */}
                <img
                  src="/logo2.png"
                  alt=""
                  className="object-contain w-full h-full "
                />
              </div>
            </div>
          </div>
          <div className=" col-span-8 flex flex-row justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center gap-5 ">
              <Link
                className="hover:scale-110  transition-all duration-300 flex flex-row items-center justify-center text-base-content   h-10 my-auto font-semibold min-w-fit"
                href={"/aboutus"}
              >
                About Us
              </Link>
              <div
                className={`cursor-pointer  hover:underline hover:underline-offset-8 flex justify-center items-center  hover:decoration-action-900 group min-w-fit  font-semibold [&>*]:text-base-content text-base-content`}
              >
                Services
                <IoIosArrowDown className="ml-1"></IoIosArrowDown>
                <div
                  id="dropdownHover1"
                  className="w-full h-fit -z-10 !absolute right-0 pt-96 pb-5 transition-all origin-top duration-300 transform scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 bg-base-100 divide-y sm:px-10 lg:px-48 mx-auto shadow "
                >
                  <div className="w-full h-full grid grid-cols-3  mt-14 divide-x-4">
                    <ul className=" text-start col-start-1 col-span-1 ">
                      <li>
                        <p className=" text-xl font-bold block px-4 py-2 text-main cursor-pointer ">
                          Financial Freedom
                        </p>
                        <ul className=" pl-6">
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Invest Early
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Variety of SIP's
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className=" text-start col-start-2 col-span-1">
                      <li>
                        <p className=" text-xl font-bold block px-4 py-2 text-main cursor-pointer ">
                          Products and Services
                        </p>
                        <ul className=" pl-6">
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Mutual Fund
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Fixed Income Products
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Real Estate Products Services
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Portfolio Management
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Insurance
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className=" text-start col-start-3 col-span-1">
                      <li>
                        <p className=" text-xl font-bold block px-4 py-2 text-main cursor-pointer ">
                          Products and Services
                        </p>
                        <ul className=" pl-6">
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Loans
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Private Equity Solutions
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Alternative Investments
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Tax Planning
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              National Pension Scheme
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link
                className="hover:scale-110  transition-all duration-300 flex flex-row items-center justify-center text-base-content  h-10 my-auto font-semibold text-center min-w-fit"
                href={"/team"}
              >
                Team
              </Link>
              <Link
                className="hover:scale-110  transition-all duration-300 flex flex-row items-center justify-center text-base-content     my-auto font-semibold text-center min-w-fit"
                href={"/equity"}
              >
                Investment Research
              </Link>
              <Link
                className="hover:scale-110  transition-all duration-300 flex flex-row items-center justify-center text-base-content min-w-fit  h-10 my-auto font-semibold text-center"
                href={"/workshop"}
              >
                Workshop
              </Link>
              <div
                className={`cursor-pointer  hover:underline hover:underline-offset-8 flex justify-center items-center  hover:decoration-action-900 group min-w-fit font-semibold [&>*]:text-base-content text-base-content`}
              >
                Resources
                <IoIosArrowDown className="ml-1"></IoIosArrowDown>
                <div
                  id="dropdownHover1"
                  className="w-full h-fit -z-10 !absolute right-0 pt-72 pb-5 transition-all origin-top duration-300 transform scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 bg-base-100 divide-y sm:px-10 lg:px-48 mx-auto shadow "
                >
                  <div className="w-full h-full grid grid-cols-3  mt-14 divide-x-3">
                    {/* <ul className=" text-start col-start-1 col-span-1">
                      <li>
                        <Link
                          href={"#"}
                          className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900 "
                        >
                          Financial Freedom
                        </Link>
                        <ul className=" pl-6">
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Invest Early
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Variety of SIP's
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                    <div className="flex flex-row justify-center items-center text-2xl font-bold">
                      Resources {">"}
                    </div>

                    <ul className=" pl-6 col-span-2">
                      <li>
                        {" "}
                        <Link
                          href={"/faqs"}
                          className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={"#"}
                          className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={"#"}
                          className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                        >
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={"#"}
                          className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                        >
                          News
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={"#"}
                          className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                        >
                          Videos
                        </Link>
                      </li>
                    </ul>
                    {/* <ul className=" text-start col-start-3 col-span-1">
                      <li>
                        <Link
                          href={"#"}
                          className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                        >
                          Products and Services
                        </Link>
                        <ul className=" pl-6">
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Loans
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Private Equity Solutions
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Alternative Investments
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              Tax Planning
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link
                              href={"#"}
                              className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900"
                            >
                              National Pension Scheme
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <Link
                className="hover:scale-110  transition-all duration-300 flex flex-row items-center justify-center text-base-content  min-w-fit  h-10 my-auto font-semibold"
                href={"#"}
              >
                Be An Associate
              </Link>
            </div>
          </div>
          <div className=" col-span-2 w-full flex flex-row justify-end p-2">
            {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

            {/* <ThemeTogglerButton buttonType="toggle" /> */}

            {/* Condition rendering on loggin and logged out */}

            {islogin ? (
              <>
                <div className="dropdown dropdown-end bg-base-100 text-base-content ">
                  <label
                    tabIndex={0}
                    className="cursor-pointer flex flex-row justify-center items-center"
                  >
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <Image src={imageUrl} height={500} width={500} />
                      </div>
                    </div>
                  </label>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu px-5 pt-5 pb-3 bg-base-100 rounded-box w-64 space-y-3 shadow"
                  >
                    <li className="block text-sm">{userName}</li>
                    <li className="block truncate text-sm font-medium">
                      {userEmail.substring(0, 6)}***
                      {userEmail.substring(userEmail.length - 3)}
                    </li>
                    <hr />
                    <Link
                      className="cursor-pointer hover:opacity-70"
                      href={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                    <li className="cursor-pointer hover:opacity-70">
                      Settings
                    </li>
                    <li
                      className="cursor-pointer hover:opacity-70"
                      onClick={() => router.push("/add-blog")}
                    >
                      Add blog
                    </li>
                    <li
                      className="cursor-pointer hover:opacity-70"
                      onClick={logout}
                    >
                      Sign out
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Button className="bg-primary text-white font-semibold">
                Login
              </Button>
            )}

            {/* Condition rendering on loggin and logged out */}

            <button
              id="signUpModalbtn"
              data-modal-target="signUpModal"
              data-modal-toggle="signUpModal"
              className="border-2 w-20  border-[#2673e3] md:p-2 p-1 rounded-full text-sm text-gray-600 shadow-sm hover:bg-[#4492f9] hidden hover:text-white transition-all duration-500 hover:shadow-lg"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>

      {/* <LoginModal /> */}
      {/* <SignUpModal /> */}

      {/* ===================================================Mobile Navbar==================================================  */}
      <div
        className={`${
          isSticky ? "shadow-lg" : "shadow-none"
        } lg:hidden flex bg-base-100 border-b   pt-2 justify-between px-4 items-center pb-1 sticky top-0 z-[60]`}
      >
        <div
          className="flex flex-row space-x-2 items-center cursor-pointer select-none "
          onClick={() => router.push("/")}
        >
          {/* <SiteLogo /> */}
          <div className="text-start object-contain w-32">
            {/* <p className="text-3xl font-semibold text-base-content">
              WEALTHTRUST
            </p> */}
            <img
              src="/logo2.png"
              alt=""
              className="object-contain w-full h-full "
            />
          </div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          {showMobileMenu ? (
            <IoMdClose
              size={35}
              className="text-base-content rounded-md  "
              onClick={() => setshowMobileMenu(false)}
            />
          ) : (
            <IoMdMenu
              size={35}
              className="text-base-content rounded-md  "
              onClick={() => setshowMobileMenu(true)}
            />
          )}
        </div>
        <MobileMenu
          setshowMobileMenu={setshowMobileMenu}
          show={showMobileMenu}
          // showLoginModal={showLoginModal}
        />
      </div>
    </>
  );
}

export default NavBarComp;
