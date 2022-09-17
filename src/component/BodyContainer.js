import React from "react";
import BG from "../assets/images/image-hero-desktop.png";
import dataBiz from "../assets/images/client-databiz.svg";
import audioPhine from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
const BodyContainer = () => {
  return (
    <>
      <div className="Landing-Container">
        <div className="Left-information">
          <div className="title">
            Make <br />
            remote work
          </div>
          <div className="desc">
            Get your team in sync.No matter your location.
            <br />
            Streamlines processes,Create team rituals,
            <br /> and watch productivity soar.
          </div>
          <button className="more-btn">Learn more</button>
          <div className="logos">
            <img src={dataBiz} alt="h" />
            <img src={audioPhine} alt="h" />
            <img src={meet} alt="h" />
            <img src={maker} alt="h" />
          </div>
        </div>
        <div className="Right-information">
          <img src={BG} alt="PIC" className="img-img" />
        </div>
      </div>
    </>
  );
};

export default BodyContainer;
