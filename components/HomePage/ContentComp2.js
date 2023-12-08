import React from "react";

function ContentComp2() {
  function handleSmoothScroll(e) {
    if (window.location.pathname == "/") {
      e.preventDefault(); // Prevent the default behavior of jumping to the anchor.

      const targetId = e.currentTarget.getAttribute("href").split("#")[1]; // Get the target id without the '#'.

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // This triggers smooth scrolling.
          block: "start", // This aligns the top of the target element with the top of the viewport.
        });
      }
    } else {
      return;
    }
  }

  return (
    <>
      <section className="py-20 lg:py-[120px] bg-primary-content">
        <div className="container">
          <div
            className={`relative z-10 overflow-hidden rounded  py-12 px-8 md:p-[70px]`}
          >
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <span className="mb-2 text-base font-semibold text-white">
                  Find Your Next Dream Project with us
                </span>
                <h2 className="mb-6 text-3xl w-2/3 font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
                  Get started with our free wide Range of Services
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap space-x-4 lg:justify-end">
                  <a
                    href="/contactus"
                    className={`my-1 cursor-pointer inline-block rounded bg-info py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9 border border-action-900`}
                  >
                    Contanct Us
                  </a>
                  <a
                    href="/#Services"
                    onClick={handleSmoothScroll}
                    className={`my-1 cursor-pointer inline-block rounded bg-white py-4 px-6 text-base font-medium text-black transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width={189}
                  height={162}
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx={16}
                    cy="-16.5"
                    rx={173}
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1={-157}
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width={191}
                  height={208}
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx={173}
                    cy="178.5"
                    rx={173}
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentComp2;
