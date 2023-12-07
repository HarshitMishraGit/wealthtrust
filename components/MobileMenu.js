import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowBarRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";
function MobileMenu(props) {
  const [islogin, setislogin] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`fixed bg-base-200  h-screen top-0 z-50  transition-all  duration-300 w-[15em] md:w-1/2 backdrop-blur-lg right-0 ${
        props.show ? "translate-x-0" : `translate-x-full`
      } `}
    >
      <div>
        {" "}
        <BsArrowBarRight
          size={32}
          onClick={() => props.setshowMobileMenu(false)}
          className="text-base-content  ml-1 rounded-md p-1  mt-10 "
        />{" "}
      </div>
      <div className={`flex flex-row justify-center w-full pt-5`}>
        {islogin ? (
          <>
            <div className="flex flex-col justify-center items-center w-full ">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image src={imageUrl} height={500} width={500} />
                </div>
              </div>
              <div>{userName}</div>
              <div>
                {userEmail.substring(0, 6)}***
                {userEmail.substring(userEmail.length - 3)}
              </div>
            </div>
          </>
        ) : (
          <div
            className=" flex flex-row items-center justify-center text-accent-content font-thin h-10 my-auto px-6 py-1 bg-secondary rounded-md"
            href={"/"}
            onClick={() => {
              props?.setshowMobileMenu(false);
              props?.showLoginModal();
            }}
          >
            Login
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-4  pt-20 pl-10 select-none cursor-pointer">
        {/* after Login account section */}
        {islogin && (
          <>
            <div
              className="w-full font-thin cursor-pointer text-center flex items-center  hover:decoration-action-900  group "
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              onClick={() => setOpen((e) => !e)}
            >
              Account Setting
              <IoIosArrowDown
                className={`ml-1 ${
                  open ? "rotate-180" : "rotate-0"
                } transition-all transform duration-300`}
              ></IoIosArrowDown>
            </div>
            <ul
              className={`py-2 text-sm text-main ${
                open ? "block" : "hidden"
              } transition-all duration-500`}
            >
              <li>
                <div onClick={logout} className="badge badge-secondary ">
                  Sign Out
                </div>
              </li>
            </ul>
          </>
        )}
        {/* after Login account section */}
        {/* <div className="flex flex-row justify-start w-full  h-10 items-center">
        <ThemeTogglerButton />
      </div> */}

        <Link
          className=" text-base-content flex flex-row items-center  w-full font-thin h-10 my-auto"
          href={"/blogs"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          Blogs
        </Link>
        <Link
          className=" text-base-content flex flex-row items-center   w-full font-thin h-10 my-auto"
          href={"/services"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          Services
        </Link>
        <Link
          className=" text-base-content flex flex-row items-center   w-full font-thin h-10 my-auto"
          href={"/pricing"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          Pricing
        </Link>
        <Link
          className=" text-base-content flex flex-row items-center   w-full font-thin h-10 my-auto"
          href={"/aboutus"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;