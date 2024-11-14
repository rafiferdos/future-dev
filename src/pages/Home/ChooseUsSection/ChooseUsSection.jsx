// import React from 'react'
// import chooseUs from '../../../../public/data/chooseUs';

// const ChooseUsSection = () => {

//    return (
//      <div className="mt-24 relative ">
//        <h2 className="text-center mb-5 font-extrabold text-primary text-5xl">
//          Why Choose us{" "}
//        </h2>
//        <div className="grid grid-cols-1 items-center  md:grid-cols-2 lg:grid-cols-5  gap-24">
//          <div className="flex  lg:col-span-3 pl-6 mb-52 md:mb-0 space-y-4 lg:space-y-0  md:px-0 col-span-1 flex-col justify-between">
//            <div className="space-y-6">
//              {chooseUs?.length > 0 &&
//                chooseUs?.map((data) => (
//                  <div className="flex items-center gap-5" key={data?.id}>
//                    <img
//                      className="bg-primary h-8 w-8 p-2 rounded-full"
//                      src={data?.icon}
//                      alt=""
//                    />
//                    <div className="text-[#000000] space-y-1">
//                      <h3 className="font-bold">{data?.title}</h3>
//                      <p className="text-[16px]">{data?.description}</p>
//                    </div>
//                  </div>
//                ))}
//            </div>
//          </div>
//          <div className="relative col-span-1   lg:col-span-2">
//            <div className="absolute bottom-52">
//              <div className="bg-primary absolute w-[269px] left-[113px] min-h-[500px] rounded-l-[53px]"></div>
//              <div className="mt-10">
//                <img
//                  className="max-w-96 absolute h-96"
//                  src="/chooseUse.png"
//                  alt=""
//                />
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
// }

// export default ChooseUsSection

import React from "react";
import chooseUs from "../../../../public/data/chooseUs";

const ChooseUsSection = () => {
  return (
    <div className="mt-24">
      <h2 className="text-center mb-5 font-extrabold text-primary text-5xl">
        Why Choose us
      </h2>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 gap-24">
        <div className="flex lg:col-span-3 pl-6 mb-52 md:mb-0 space-y-4 lg:space-y-0 md:px-0 col-span-1 flex-col justify-between">
          <div className="space-y-6">
            {chooseUs?.length > 0 &&
              chooseUs.map((data) => (
                <div className="flex items-center gap-5" key={data.id}>
                  <img
                    className="bg-primary h-8 w-8 p-2 rounded-full"
                    src={data.icon}
                    alt=""
                  />
                  <div className="text-[#000000] space-y-1">
                    <h3 className="font-bold">{data.title}</h3>
                    <p className="text-[16px]">{data.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 flex  items-center">
          <div className="relative bottom-52">
            <div className="bg-primary absolute left-36 h-[500px] w-[260px] rounded-l-[53px]"></div>
            <img
              className="max-w-[600px] absolute left-2  top-12  h-96"
              src="/chooseUse.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
