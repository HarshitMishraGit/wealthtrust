import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowBarRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
function MobileMenu(props) {
  const [islogin, setislogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setopen2] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`fixed bg-base-100 pb-5 w-screen top-0 z-40  transition-all  duration-300  backdrop-blur-lg right-0 ${
        props.show
          ? "translate-y-[5rem] opacity-100 border-t-2 border-base-content shadow-xl"
          : `-translate-y-full  opacity-0`
      } `}
    >
      <div className={`flex flex-row justify-center w-full pt-5`}>
        {/* <Link
          className=" btn btn-primary"
          href={"/"}
          onClick={() => {
            props?.setshowMobileMenu(false);
            props?.showLoginModal();
          }}
        >
          Login
        </Link> */}
        <Dropdown>
          <DropdownTrigger>
            <Button className=" btn bg-primary text-white hover:bg-primary">
              {" "}
              Login
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              key="new"
              as={"a"}
              href="https://mf.wealthtrustcap.com/client/login.asp?arnid=wealthtrust"
            >
              Client
            </DropdownItem>
            <DropdownItem
              key="copy"
              as={"a"}
              href="https://mf.wealthtrustcap.com/broker/login.asp?arnid=wealthtrust"
            >
              Associate
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="flex flex-col space-y-4   pl-10 select-none cursor-pointer">
        <Link
          className=" text-base-content flex flex-row items-center   w-full font-thin h-10 my-auto"
          href={"/aboutus"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          About Us
        </Link>
        <div
          className={`cursor-pointer    hover:underline hover:underline-offset-8 flex  items-center    group text-base-content `}
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
              href={"https://www.wealthtrustcap.com/financefreedom.php"}
              className="block px-4 py-2 text-sm cursor-pointer "
            >
              Financial Freedom
            </Link>
            <ul className=" pl-6 [&>*]:text-xs">
              <li>
                {" "}
                <Link
                  href={"#"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Invest Early
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/sipcalc.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Variety of SIP's
                </Link>
              </li>
            </ul>
            <div
              className="block px-4 py-2  text-sm cursor-pointer 
 "
            >
              Product and Services
            </div>
            <ul className=" pl-6 [&>*]:text-xs">
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/mutualfund.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Mutual Fund
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/fixeddeposit.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Fixed Income Products
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/realestate.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Real Estate Products Services
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/portfolio.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Portfolio Management
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/insurance.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Insurance
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/loan.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Loans
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/privateequity.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Private Equity Solutions
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/alternative.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Alternative Investments
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"https://www.wealthtrustcap.com/taxplan.php"}
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  Tax Planning
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={
                    "https://cra.kfintech.com/poponline/popverification?AuthID=A3FEA9F3891FC23B4D697F96BB2D2237CDBE755F3A82F83860DDDB565D82F54FE43D232802741DC82070E750520D6045E16443A27E7F63396975C607E5A3C118359A4F8820C26443C84EB3C38B7F8502"
                  }
                  className="block px-4 py-2 text-base-content cursor-pointer hover:underline hover:underline-offset-8
 "
                >
                  National Pension Scheme
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <Link
          className=" text-base-content flex flex-row items-center   w-full font-thin h-10 my-auto"
          href={"/team"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          Team
        </Link>
        <Link
          className=" text-base-content flex flex-row items-center  w-full font-thin h-10 my-auto"
          href={"/equity"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          Investment Research
        </Link>
        <Link
          className=" text-base-content flex flex-row items-center   w-full font-thin h-10 my-auto"
          href={"/workshop"}
          onClick={() => {
            props?.setshowMobileMenu(false);
          }}
        >
          Workshop
        </Link>
        <div
          className={`cursor-pointer    hover:underline hover:underline-offset-8 flex  items-center    group text-base-content `}
          onClick={() => setopen2((e) => !e)}
        >
          Resources
          <IoIosArrowDown
            className={`ml-1 ${
              open2 ? "rotate-180" : "rotate-0"
            } transition-all transform duration-300`}
          ></IoIosArrowDown>
        </div>
        <ul
          className={`py-2 text-sm text-base-content flex flex-col ${
            open2 ? "block" : "hidden"
          } transition-all duration-500`}
        >
          <Link
            href={"https://www.wealthtrustcap.com/blogs.php"}
            className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
  "
          >
            Blogs
          </Link>
          {/* <Link
            href={"#"}
            className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
 "
          >
            Case Studies
          </Link> */}
          <Link
            href={"#"}
            className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
 "
          >
            Market Outlook
          </Link>
          <Link
            href={"https://www.wealthtrustcap.com/media.php"}
            className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
"
          >
            Videos
          </Link>
          <Link
            href={"/faqs"}
            className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
  "
          >
            FAQs
          </Link>
        </ul>
        <Link
          className=" text-base-content flex flex-row items-center  w-full font-thin h-10 my-auto"
          href={"https://www.wealthtrustcap.com/beassociate.php"}
          // onClick={() => {
          //   props?.setshowMobileMenu(false);
          // }}
        >
          Be An Associate
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
