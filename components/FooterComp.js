"use client";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiSocialblade } from "react-icons/si";
import Link from "next/link";
function FooterComp() {
  const openLinkInPopup = (url) => {
    window.open(url, "_blank", "width=700,height=500");
  };

  return (
    <>
      <footer className="bg-gray-700 min-h-screen flex flex-col gap-3 sm:grid sm:grid-cols-5  w-full sm:pt-24 pt-3 px-6 lg:px-10">
        <div className="flex flex-col col-start-4 gap-5 h-fit  col-span-2 text-white bg-black bg-opacity-60 backdrop-blur shadow-xl p-5 rounded-lg   sm:px-5">
          <div className="font-bold text-xl">
            Get Monthly Market Outlook From WTCS
          </div>

          <form action="#" className="">
            <div className="flex flex-col gap-4 ">
              <Input type="email" label="Email" />
              <Button className="w-fit">Subscribe</Button>
            </div>
          </form>
        </div>
        <div className="col-start-1 row-start-1">
          <div className="font-bold text-2xl text-white">Resources</div>
          <div className="flex flex-col gap-5 text-white py-5">
            <div className="cursor-pointer ">Blog</div>
            <div className="cursor-pointer ">Case Studies</div>
            <div className="cursor-pointer ">News</div>
            <div className="cursor-pointer ">Videos</div>
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
              <p className="text-sm">+91 98 190 39 345</p>
            </section>
            <section>
              <div className=" inline-flex gap-2 items-center">
                <MdEmail size={15} className="text-white" />
                <p> Email</p>
              </div>
              <p className="text-sm">enquiry@wealthtrustcap.com</p>
            </section>
            <section>
              <div className=" inline-flex gap-2 items-center">
                <SiSocialblade size={15} className="text-white" />
                <p> Follow Us on </p>
              </div>
              <div className="flex flex-row gap-5 py-1">
                <FaYoutube size={25} />
                <FaFacebook size={25} />
                <FaLinkedin size={25} />
                <FaInstagram size={25} />
              </div>
            </section>
          </div>
        </div>
        <div className="col-start-3 row-start-1 justify-center sm:px-4 text-white">
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

        {/* <div className="flex flex-row   items-center gap-3  col-start-5  select-none text-white">
          <div className=" cursor-pointer flex flex-col justify-center items-end">
            <IoLogoGooglePlaystore
              // size={60}
              className="  w-full h-full hover:scale-110 transform transition-all duration-500 ease-in-out"
            />
            <p> Mobile App</p>
          </div>
          <div className="w-32  h-[5rem]  object-contain flex flex-col justify-start items-center cursor-pointer">
            <img
              src="/media-player.png"
              alt=""
              className="object-contain w-full h-full"
            />
            Media Room
          </div>
        </div> */}

        <div className="col-start-1 col-span-5 items-center justify-center text-white border-t border-b  flex flex-col py-5 gap-2">
          <p className="text-3xl font-semibold text-center">
            WealthTrust Capital Services LLP
          </p>
          <p className="text-sm">
            CIN- AAF-3245 | GSTIN -27AACFW1937A1ZG | ARN No.-109017 (AMFI
            Registered Mutual Fund Distributor)
          </p>
          <p className="text-sm">
            Mutual fund investments are subject to market risks. Therefore, read
            the scheme information and other related documents carefully, before
            investing. Past performance is not indicative of future returns.
          </p>
          <p className="text-sm">
            WealthTrust Capital Services (Proprietorship) – Bank and Financial
            Institution DSA
          </p>
          <p className="text-sm">
            WealthTrust Capital Services (Partnership Firm) - SEBI Registered
            Research Analyst - INH000011149 - GSTIN - 27AADFW8285G1Z0
          </p>
        </div>
        <div className="col-start-1 col-span-5 items-center justify-center text-white text-center py-2">
          © 2022 WealthTrustCap. All Rights Reserved | Design by{" "}
          <Link href={"https://marketonearth.com"}>marketOnEarth</Link>
        </div>
      </footer>
    </>
  );
}

export default FooterComp;
