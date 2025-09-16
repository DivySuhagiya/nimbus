import React, { Fragment } from "react";
import { MarqueeConstants } from "../constants/MarqueeSection/MarqueeConstants";
import { LogoMark } from "../components/common/LogoMark";
import clsx from "clsx";

type Props = {
  id: string;
  direction?: string;
};

const MarqueeSection = ({ id, direction }: Props) => {
  const MarqueeContent = () => (
    <div className="flex items-center bg-gray-200 py-10 whitespace-nowrap">
      {/* for given id */}
      {MarqueeConstants.find((item) => item.id === id)?.text.map((text, i) => (
        <Fragment key={i}>
          <div className="font-bold-slanted px-14 text-[180px] leading-none text-gray-400/80 uppercase [text-box:trim-both_cap_alphabetic] md:text-[260px]">
            {text}
          </div>
          <LogoMark className="size-36 flex-shrink-0" />
        </Fragment>
      ))}
    </div>
  );
  return (
    <section>
      <div
        className="relative flex w-full items-center overflow-hidden select-none"
        aria-hidden="true"
        role="presentation"
      >
        <div className="relative flex items-center whitespace-nowrap">
          <div
            className={clsx(
              "marquee-track animate-marquee flex",
              direction === "Right" && "[animation-direction:reverse]",
            )}
          >
            {/* Content to duplicate */}
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
