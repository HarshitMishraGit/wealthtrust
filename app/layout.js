import { Inter, Lora, Poppins } from "next/font/google";
import "./globals.css";
import NavBarComp from "@/components/NavBarComp";
import { Providers } from "./Providers";
import FooterComp from "@/components/FooterComp";
import CTA from "@/components/CTA";
// const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "300" });
export const metadata = {
  title: "WealthTrust",
  description:
    "We believe Managing Wealth is an Art. We are a new age Wealth Management firm focused on managing Financial Product Suitability of its discerning clients with pragmatism , precision and long term focus. In doing so, we introduce various products in a client’s portfolio including Mutual Funds, Insurance, Direct Equity, AIF, PMS, FD, Bonds, PPF and NPS. As an addition to our overall proposition, through our investment banking arm we aid clients to diversify their investments in opportunistic ideas to cater to their sophisticated needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-base-100`}>
        <Providers>
          <NavBarComp />
          {children}
          <CTA />
          <FooterComp />
        </Providers>
      </body>
    </html>
  );
}
