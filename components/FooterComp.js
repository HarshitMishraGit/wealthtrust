"use client";
import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiSocialblade } from "react-icons/si";
import Footercard from "./Footercard";
import Link from "next/link";
function FooterComp() {
  const openLinkInPopup = (url) => {
    window.open(url, "_blank", "width=700,height=500");
  };
  const certifications = [
    {
      imageUrl: "/Resources/cert1.jpg",
      title:
        "  WealthTrust Capital Services LLP | CIN- AAF-3245 | GSTIN -27AACFW1937A1ZG | ARN No.-109017 (AMFI Registered Mutual Fund Distributor)",
    },
    {
      imageUrl: "/Resources/cert3.jpg",
      title:
        "WealthTrust Capital Services (Proprietorship) - Bank and Financial Institution DSA",
    },
    {
      imageUrl: "/Resources/cert2.png",
      title:
        "WealthTrust Capital Services (Partnership Firm) - SEBI Registered Research Analyst - INH000011149 - GSTIN - 27AADFW8285G1Z0",
    },
  ];
  const [year, Setyear] = useState();
  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    Setyear(year);
  }, []);

  return (
    <>
      <footer className="bg-gray-900 min-h-screen flex flex-col gap-3 sm:grid sm:grid-cols-5  w-full sm:pt-24 pt-10 px-6 lg:px-10">
        <div className="flex flex-col col-start-4 gap-5 h-fit  col-span-2 text-white bg-black bg-opacity-60 backdrop-blur shadow-xl p-5 rounded-lg   sm:px-5">
          <div className="font-bold text-xl">
            Get Monthly Market Outlook From WTCS
          </div>

          <form method="POST" action="/MonthlyOutlook.php" className="">
            <div className="flex flex-col gap-4 ">
              <Input type="email" label="Email" name="email" />
              <Button className="w-fit" name="monthlyOutlook">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="col-start-1 row-start-1">
          <div className="font-bold text-2xl text-white">Resources</div>
          <div className="flex flex-col gap-5 text-white py-5">
            <Link className="cursor-pointer " href={"/faqs"}>
              FAQs
            </Link>
            <Link
              href={"https://www.wealthtrustcap.com/blogs.php"}
              className="cursor-pointer "
            >
              Blogs
            </Link>
            {/* <Link href={"#"} className="cursor-pointer ">
              Case Studies
            </Link> */}
            <Link href={"/monthlyoutlook.php"} className="cursor-pointer ">
              Market Outlook
            </Link>
            <Link
              href={"https://www.wealthtrustcap.com/media.php"}
              className="cursor-pointer "
            >
              Videos
            </Link>
          </div>
          <div className="py-2 font-semibold text-white">
            <h3>Download our app</h3>
          </div>
          <div className="flex flex-row justify-start  w-full items-center gap-5 text-white">
            <Link
              href="https://play.google.com/store/apps/details?id=com.dipl.wtcs.app"
              target="_blank"
            >
              <FaGooglePlay
                size={30}
                className="hover:scale-105 cursor-pointer"
              />
            </Link>
            <Link
              href="https://apps.apple.com/in/app/fincorp-online/id1384110071"
              target="_blank"
            >
              <FaAppStoreIos
                size={33}
                className="hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="col-start-2 row-start-1 ">
          <div className="font-bold text-2xl text-white">Contact Us</div>
          <div className="flex flex-col gap-5 text-white py-5">
            <section>
              <div className=" inline-flex gap-2 items-center">
                <FaLocationDot size={15} className="text-white" />
                <p> Location</p>
              </div>
              <p className="text-sm">
                Office Number 1, Aikya Signature, Naushir Barucha Marg, Sleater
                Road, Tardeo, Mumbai - 400007
              </p>
            </section>
            <section>
              <div className=" inline-flex gap-2 items-center">
                <FaPhoneAlt size={15} className="text-white" />
                <p> Phone</p>
              </div>
              <div>
                <Link
                  className="text-sm hover:underline"
                  href={"tel:+919819039345"}
                >
                  +91 98 190 39 345
                </Link>
              </div>
            </section>
            <section>
              <div className=" inline-flex gap-2 items-center">
                <MdEmail size={15} className="text-white" />
                <p> Email</p>
              </div>
              <div>
                <Link
                  className="text-sm hover:underline"
                  href={"mailto:enquiry@wealthtrustcap.com"}
                >
                  enquiry@wealthtrustcap.com
                </Link>
              </div>
            </section>
            <section>
              <div className=" inline-flex gap-2 items-center">
                <SiSocialblade size={15} className="text-white" />
                <p> Follow Us on </p>
              </div>
              <div className="flex flex-row gap-5 py-1">
                <Link
                  href={"https://twitter.com/WealthTrustCap"}
                  target="_blank"
                >
                  {" "}
                  <FaTwitter size={25} />
                </Link>
                <Link
                  href={"https://www.facebook.com/wealthtrustcap"}
                  target="_blank"
                >
                  {" "}
                  <FaFacebook size={25} />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/company/wealthtrust-capital-services/"
                  }
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin size={25} />
                </Link>
                <Link
                  href={"https://www.instagram.com/wealthtrustcapital/"}
                  target="_blank"
                >
                  {" "}
                  <FaInstagram size={25} />
                </Link>
                <Link
                  href={
                    "https://youtube.com/@wealthtrustcapitalservices8059?si=SOKC-xcN06-w20AG"
                  }
                  target="_blank"
                >
                  {" "}
                  <FaYoutube size={25} />
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div className="col-start-3 row-start-1 justify-center sm:px-4 text-white">
          <div>
            <div className="font-bold text-2xl ">Calculators</div>
            <div className="flex flex-col gap-2 py-4 ">
              <div
                className="cursor-pointer"
                onClick={() => {
                  openLinkInPopup(
                    "https://www.dataaccurate.in/FincorpOnline-Latest/calculators/lumpsum.asp"
                  );
                }}
              >
                Lumpsum Calculator
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  openLinkInPopup(
                    "https://www.dataaccurate.in/FincorpOnline-Latest/calculators/Sip%20Simple/sip.html"
                  );
                }}
              >
                SIP(Classic)
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  openLinkInPopup(
                    "https://www.dataaccurate.in/FincorpOnline-Latest/calculators/SIP%20Calculator/sipcalc.asp"
                  );
                }}
              >
                SIP(Advanced)
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  openLinkInPopup(
                    "https://www.dataaccurate.in/FincorpOnline-Latest/calculators/childfuture.asp"
                  );
                }}
              >
                Education Calculator
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  openLinkInPopup(
                    "https://www.dataaccurate.in/FincorpOnline-Latest/calculators/retirement.asp"
                  );
                }}
              >
                Retirement Calculator
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-row   items-center gap-3  col-start-5  select-none text-white">
          <div className=" cursor-pointer flex flex-col justify-center items-end">
            <IoLogoGooglePlaystore
              // size={60}
              className="  w-full h-full hover:scale-110 transform transition-all duration-500 ease-in-out"
            />
            <p> Mobile App</p>
          </div>
          <div className="w-32  h-[5rem]  object-contain flex flex-col justify-start items-center cursor-pointer">
            <img loading="lazy"
              src="/media-player.png"
              alt=""
              className="object-contain w-full h-full"
            />
            Media Room
          </div>
        </div> */}

        <div className="col-start-1 col-span-5 items-center justify-center text-white border-t border-b  flex flex-col py-5 gap-2">
          {/* <p className="text-3xl font-semibold text-center">
          
          </p> */}
          <div className="flex flex-row justify-start w-full">
            <p className="text-sm ">we are well certified -</p>
          </div>
          <div className="lg:grid py-5 lg:grid-cols-3 flex flex-col gap-4 justify-center items-center">
            {certifications.map((item, index) => {
              return (
                <Footercard
                  title={item.title}
                  keyval={index}
                  key={index}
                  imageUrl={item.imageUrl}
                />
              );
            })}
          </div>
          {/* <p className="text-sm">
            CIN- AAF-3245 | GSTIN -27AACFW1937A1ZG | ARN No.-109017 (AMFI
            Registered Mutual Fund Distributor)
          </p> */}
          <p className="text-sm">
            Mutual fund investments are subject to market risks. Read the scheme
            information and other related documents carefully, before investing.
            Past performance is not indicative of future returns.
          </p>
          {/* <p className="text-sm">
            WealthTrust Capital Services (Proprietorship) – Bank and Financial
            Institution DSA
          </p>
          <p className="text-sm">
            WealthTrust Capital Services (Partnership Firm) - SEBI Registered
            Research Analyst - INH000011149 - GSTIN - 27AADFW8285G1Z0
          </p> */}
        </div>
        <div className="col-start-1 col-span-5 items-center justify-center text-white text-center py-2">
          © {year} WealthTrustCap. All Rights Reserved | Design by{" "}
          <Link
            href={"https://marketonearth.com"}
            target="_blank"
            className="underline"
          >
            marketOnEarth
          </Link>
        </div>
      </footer>
    </>
  );
}

export default FooterComp;
