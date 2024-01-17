import React from "react";
import CardComp from "./CardComp";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
function ServicesComp(props) {
  const { itemNumber } = props;
  const data = [
    [
      {
        title: "title",
        description: `<p>Investment research is the systematic analysis of stocks and financial instruments to provide valuable insights for investment decisions. At Wealth Trust Capital, our experienced team conducts thorough equity research, offering in-depth analyses and recommendations to empower you with the knowledge needed to make informed investment choices and navigate the dynamic stock market landscape effectively.</p>
        <a href="https://www.wealthtrustcap.com/equity.php" target="_blank" style="color:blue;">Read more...</a>
        `,
      },
    ],
    [
      {
        title: "title",
        description: `<p>Portfolio management involves expertly managing a collection of investments to achieve specific financial objectives. At Wealth Trust Capital, we help optimize your portfolio, offering personalized strategies and guidance to enhance returns, minimize risks, and navigate the complexities of the financial markets for sustained wealth growth.</p>
        <a href="https://wealthtrustcap.com/equity/wealth-trust" target="_blank" style="color:blue;">Read more...</a>
        `,
      },
    ],
    [
      {
        title: "title",
        description: `<p>Mutual funds are diversified investment vehicles pooling money from various investors to collectively invest in a portfolio of stocks, bonds, or other securities. At Wealth Trust Capital, we guide you through the diverse world of mutual funds, helping you select and manage a portfolio that aligns with your financial goals, providing a pathway to long-term wealth creation.</p>
        
        <a href="https://www.wealthtrustcap.com/mutualfund.php" target="_blank" style="color:blue;">Read more...</a>`,
      },
    ],
    [
      {
        title: "title",
        description: `
        <p>
       <span style="font-weight:bold;"> Tax planning </span> involves strategic financial management to minimize your tax liabilities while ensuring compliance with relevant regulations. At Wealth Trust Capital, our experts employ innovative tax planning strategies tailored to your unique circumstances, helping you optimize your financial position and retain more of your hard-earned wealth.
        </p>
        <p>
        <span style="font-weight:bold;"> Insurance planning </span>is a crucial component of a comprehensive financial strategy, providing protection and security for you and your loved ones. Wealth Trust Capital specializes in personalized insurance planning, guiding you to select the right coverage to safeguard against life's uncertainties and build a robust financial foundation for the future.
        </p>

        <a href="https://www.wealthtrustcap.com/taxplan.php" target="_blank" style="color:blue;">Read more...</a>
        
        `,
      },
    ],
  ];
  return (
    <div>
      <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-1 md:gap-12 md:space-y-0">
        {data[itemNumber].map((item, index) => {
          return (
            <Fade key={index} spy={itemNumber + 1} appear={true}>
              <div className="bg-lightGreen px-3 py-7 shadow-lg relative ">
                <div className="w-full h-full relative overflow-hidden">
                  <div
                    className="text-black  pl-5 text-left"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesComp;
