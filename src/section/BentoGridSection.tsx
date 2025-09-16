import React from "react";
import { Bounded } from "../components/common/Bounded";
import ContentRender from "../components/bentoGridSection/ContentRender";
import { images } from "../constants/bentoGridSection/BentoGridConstants";
import { FadeIn } from "../components/common/FadeIn";

const BentoGridSection = () => {
  return (
    <section>
      <Bounded>
        <FadeIn start="top 90%">
          <h2
            id="features"
            className="font-bold-slanted mb-8 scroll-pt-6 text-6xl uppercase md:text-8xl"
          >
            Vapor75 Features
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {images.map((image) => (
            <ContentRender image={image} key={image.id} />
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default BentoGridSection;
