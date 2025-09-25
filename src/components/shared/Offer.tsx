import React from "react";
import { BsTags } from "react-icons/bs";

const Offer = () => {
  return (
    <section className="flex font-bold bg-primary-light p-2 text-white w-full justify-center items-center gap-x-1 text-xs">
      <BsTags  size={15}/>
      Only $1.49/mo Hosting + Free .COM
    </section>
  );
};

export default Offer;
