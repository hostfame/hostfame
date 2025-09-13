import DifferentHostingPlans from "@/components/shared/sections/DifferentHostingPlans";
import { differentHostingPlansData } from "@/data/home.data";
import React from "react";

const Home = () => {
  return (
    <section>
      <DifferentHostingPlans data={differentHostingPlansData}/>
    </section>
  );
};

export default Home;
