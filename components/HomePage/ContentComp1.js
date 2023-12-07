import React from "react";
function ContentComp1() {
  return (
    <section className="min-h-fit lg:p-12 p-4  hero  bg-base-100">
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:max-w-6xl lg:gap-4 flex flex-col space-y-5">
        <div className="lg:col-start-2 lg:col-span-1 lg:row-span-1 lg:row-start-1">
          <img
            height={700}
            width={700}
            src="/meet1.jpg"
            className="object-contain w-full h-full object-top rounded-lg shadow-2xl "
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">At Wealth Trust</h1>
          <p className="py-6">
            We believe Managing Wealth is an Art. We are a new age Wealth
            Management firm focused on managing Financial Product Suitability of
            its discerning clients with pragmatism , precision and long term
            focus. In doing so, we introduce various products in a client’s
            portfolio including Mutual Funds, Insurance, Direct Equity, AIF,
            PMS, FD, Bonds, PPF and NPS. As an addition to our overall
            proposition, through our investment banking arm we aid clients to
            diversify their investments in opportunistic ideas to cater to their
            sophisticated needs.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default ContentComp1;
