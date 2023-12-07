import React from "react";
function ContentComp1() {
  return (
    <section className="min-h-fit p-10  hero  bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          height={500}
          width={500}
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-[20rem] rounded-lg shadow-2xl "
        />
        <div className="lg:w-1/2">
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
