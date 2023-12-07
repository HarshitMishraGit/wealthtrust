import React from "react";

function StatsComp() {
  return (
    <section className="stats flex flex-col space-y-4 justify-center items-center sm:pt-[17rem] lg:pt-10 pt-[12rem]">
      <h2>In Numbers</h2>
      <div className="stats w-full border-b-1 shadow-none flex flex-col md:flex-row ">
        <div className="stat place-items-center">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </section>
  );
}

export default StatsComp;
