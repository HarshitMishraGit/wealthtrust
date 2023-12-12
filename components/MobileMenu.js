import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowBarRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";
function MobileMenu(props) {
  const [islogin, setislogin] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`fixed bg-base-100 py-10 w-screen top-0 z-40  transition-all  duration-300  backdrop-blur-lg right-0 ${
        props.show
          ? "translate-y-12 opacity-100 border-t-2 border-base-content shadow-xl"
          : `-translate-y-full  opacity-0`
      } `}
    >
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
          <Link
            className=" btn btn-primary"
            href={"/"}
            onClick={() => {
              props?.setshowMobileMenu(false);
              props?.showLoginModal();
            }}
          >
            Login
          </Link>
        )}
      </div>

      <div className="flex flex-col space-y-4  pt-20 pl-10 select-none cursor-pointer">
        <Link
          className=" text-base-content flex flex-row items-center  w-full font-thin h-10 my-auto"
          href={"#"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          Blogs
        </Link>
        <div
          className={`cursor-pointer hover:pl-9 hover:underline hover:underline-offset-8 flex  items-center  hover:scale-110 group text-base-content `}
          onClick={() => setOpen((e) => !e)}
        >
          Services
          <IoIosArrowDown
            className={`ml-1 ${
              open ? "rotate-180" : "rotate-0"
            } transition-all transform duration-300`}
          ></IoIosArrowDown>
        </div>
        <ul
          className={`py-2 text-sm text-base-content ${
            open ? "block" : "hidden"
          } transition-all duration-500`}
        >
          <li>
            <Link
              href={"#"}
              className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110 "
            >
              Financial Freedom
            </Link>
            <ul className=" pl-6 [&>*]:text-xs">
              <li>
                {" "}
                <Link
                  href={"#"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Invest Early
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"#"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Variety of SIP's
                </Link>
              </li>
            </ul>
            <Link
              href={"/web-design-and-development"}
              className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
            >
              Product and Services
            </Link>
            <ul className=" pl-6 [&>*]:text-xs">
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Mutual Fund
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Fixed Income Products
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Real Estate Products Services
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Portfolio Management
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Insurance
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Loans
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Private Equity Solutions
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Alternative Investments
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  Tax Planning
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
hover:scale-110"
                >
                  National Pension Scheme
                </Link>
              </li>
            </ul>
          </li>
        </ul>

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
