import React from "react";
import house from "../img/house.png";

function PageBanner({ name, footer }) {
  const bgImage = {
    backgroundImage: `url(${house})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={bgImage} className="flex items-center relative ">
      <div className="container px-20 mx-auto z-10 relative ">
        <p className="py-14 text-xl leading-none text-white  xl:text-4xl">
          {name}
        </p>
        {/* <img src={house} className="w-full h-full object-cover rounded-[15px]" /> */}

        {/* footer */}
        {footer ? (
          <p className="absolute bottom-0 right-20 py-4 text-white text-xs xl:text-base">
            {footer}
          </p>
        ) : null}
      </div>
      <div className=" absolute w-full h-full bg-primary_light/[.50] "></div>
    </div>
  );
}

export default PageBanner;
