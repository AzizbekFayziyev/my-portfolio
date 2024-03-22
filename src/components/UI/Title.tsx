import React from "react";
import { MotionDiv } from "./MotionComponents";

const Title = ({ label }: { label: string }) => {
  return (
    <MotionDiv
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="title relative text-center font-bold text-5xl my-12 max-w-max mx-auto z-10">
        {label}
      </h3>
    </MotionDiv>
  );
};

export default Title;
