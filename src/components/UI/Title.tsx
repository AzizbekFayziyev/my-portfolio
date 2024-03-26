import React from "react";
import { MotionDiv } from "./MotionComponents";

const Title = ({ label }: { label: string }) => {
  return (
    <MotionDiv
      className="relative  z-20"
      initial={{ filter: "blur(10px)", scale: 0 }}
      whileInView={{ filter: "blur(0)", scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="title text-center font-bold text-5xl my-12 max-w-max mx-auto">
        {label}
      </h3>
    </MotionDiv>
  );
};

export default Title;
