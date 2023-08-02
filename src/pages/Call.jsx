import React from "react";
import { InlineWidget } from "react-calendly";

const Call = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <InlineWidget url="https://calendly.com/rajxryan/" ></InlineWidget>
    </div>
  );
};

export default Call;
