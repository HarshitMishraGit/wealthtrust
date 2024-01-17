import React from "react";
import ContentComp1 from "@/components/HomePage/ContentComp1";
function ContentComp() {
  const content = [
    {
      badgeTitle: "Your Trust",
      title: "At Wealth Trust",
      content:
        "We believe Managing Wealth is an Art. We are a new age Wealth Management firm focused on managing Financial Product Suitability of its discerning clients with pragmatism , precision and long term focus. In doing so, we introduce various products in a client's portfolio including Mutual Funds, Insurance, Direct Equity, AIF, PMS, FD, Bonds, PPF and NPS. As an addition to our overall proposition, through our investment banking arm we aid clients to diversify their investments in opportunistic ideas to cater to their sophisticated needs.",
      imageUrl: "/meet1.jpg",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "Workshops & Events",
      content:
        "We regularly host workshops and events aimed at educating our clients about the latest trends in wealth management. These events provide an opportunity for our clients to interact with industry experts, gain insights into market trends, and understand the nuances of financial planning. Our workshops cover a wide range of topics, from investment strategies to risk management, and are designed to empower our clients to make informed financial decisions. In addition, we also organize exclusive events that offer our clients the opportunity to network with like-minded individuals and explore potential investment opportunities.",
      imageUrl: "/meet1.jpg",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "At Wealth Trust",
      content:
        "We believe Managing Wealth is an Art. We are a new age Wealth Management firm focused on managing Financial Product Suitability of its discerning clients with pragmatism , precision and long term focus. In doing so, we introduce various products in a client's portfolio including Mutual Funds, Insurance, Direct Equity, AIF, PMS, FD, Bonds, PPF and NPS. As an addition to our overall proposition, through our investment banking arm we aid clients to diversify their investments in opportunistic ideas to cater to their sophisticated needs.",
      imageUrl: "/meet1.jpg",
      reverse: false,
    },
  ];
  return (
    <>
      {content.map((item, index) => (
        <ContentComp1
          key={index}
          badgeTitle={item.badgeTitle}
          title={item.title}
          content={item.content}
          imageUrl={item.imageUrl}
          reverse={item.reverse}
        />
      ))}
    </>
  );
}

export default ContentComp;
