"use client";
import React from "react";
import FaqsSectionComp from "@/components/FAQS/FaqsSectionComp";
function page() {
  const faqs = [
    {
      id: "1",
      question: "What is wealth management?",
      answer:
        "Wealth management is a highly customized client-centric financial planning service that provides a comprehensive investment management strategy for your financial needs. The ultimate goal of wealth management is to maximize your investments while prudently managing risk to achieve all that is important to you.",
    },
    {
      id: "2",
      question: "How can I check my investments?",
      answer:
        "WealthTrust Capital Services has its own app on which you can track all your mutual fund investments. You can also log in from our website.",
    },
    {
      id: "3",
      question:
        "What are the documents required to open an investment account with us?",
      answer:
        "You need to provide us your KYC documents (Aadhar card/Pan card) which needs to be self-attested, canceled cheque/bank statement of the account being registered for the mutual fund transaction.",
    },
    {
      id: "4",
      question: "How much fees do we charge?",
      answer:
        "Our fees are mentioned in the disclosure section. We are a registered mutual fund distributor, and our fees are paid to us by our partners.",
    },
    {
      id: "5",
      question: "Can an NRI invest with us?",
      answer:
        "Yes, you as an NRI can invest with us. We have clients from UAE, UK, Singapore, USA.",
    },
    {
      id: "6",
      question: "Can I attend your workshop?",
      answer:
        "Anyone who is interested can attend our workshop. We conduct both offline and online workshops. Till now we have conducted 70+ online and offline workshops. You can simply fill the form in the workshop section, and we will reach out to you with our next workshop details.",
    },
    {
      id: "7",
      question: "How do we generate investment ideas?",
      answer:
        "Investment ideas can stem from various sources, including market trends, economic indicators, company financials, industry news, and analyst recommendations. Researching potential opportunities and staying informed about market developments are key aspects of idea generation.",
    },
    {
      id: "8",
      question:
        "Is the focus solely on small caps, or are other market segments considered?",
      answer:
        "No, our research encompasses research across all market capitalizations and sectors. We believe diversification across different market segments allows for a balanced portfolio that can benefit from opportunities in various parts of the market.",
    },
    {
      id: "9",
      question: "What information is typically included in research reports?",
      answer:
        "Research reports typically include a thorough analysis of a company or investment opportunity. This may encompass financial statements, competitive analysis, industry trends, risk factors, and a recommendation (buy, sell, or hold) and target price.",
    },
    {
      id: "10",
      question:
        "What is the cancellation policy for subscriptions or advisory services?",
      answer:
        "The cancellation policy varies depending on the service or subscription. Investors should carefully read the terms and conditions to understand the cancellation process, any associated fees, and the duration of contractual commitments.",
    },
    {
      id: "11",
      question: "When is the right time to exit a stock idea?",
      answer:
        "Exit decisions can be based on various factors, including achieving a target price, changes in the company's fundamentals, shifts in market conditions, or a reassessment of the investment thesis. Having clear exit criteria before investing helps in making rational decisions.",
    },
  ];

  return (
    <>
      <FaqsSectionComp faqs={faqs ? faqs : []} />
    </>
  );
}

export default page;
