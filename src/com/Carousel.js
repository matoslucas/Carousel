import React from "react";

import BannerAnim from "rc-banner-anim";
import TweenOne from "rc-tween-one";

import "./style.scss";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

function Carousel() {
  const box1Style = {
    backgroundImage: "linear-gradient(45deg, #673193, #00cfff)"
  };

  const box2Style = {
    backgroundImage: "linear-gradient(45deg, #25c7f2, #f8e817)"
  };

  const box3Style = {
    backgroundImage: "linear-gradient(45deg, #ffe700, #ff2b7e)"
  };

  const animation1 = { x: 250, type: "from", delay: 0 };
  const animation2 = { x: 250, type: "from", delay: 50 };
  const animation3 = { x: 250, type: "from", delay: 100 };

  return (
    <BannerAnim type="across" arrow={false}>
      <Element key="a">
        <div key="top-box" className="banner-anim-top-box">
          <TweenOne
            animation={animation1}
            className="banner-anim-page"
            style={box1Style}
          >
            1
          </TweenOne>
          <TweenOne animation={animation2}>
            <h1>Gradients</h1>
          </TweenOne>
          <TweenOne animation={animation3}>
            <span>Star, end, angle</span>
          </TweenOne>
        </div>

        <BgElement
          key="bottom-box"
          className="banner-anim-bottom-box"
          style={box1Style}
        >
          <i className="material-icons" style={{ fontSize: 54 }}>
            invert_colors
          </i>
        </BgElement>
      </Element>

      <Element key="b">
        <div key="top-box-b" className="banner-anim-top-box">
          <TweenOne
            animation={animation1}
            className="banner-anim-page"
            style={box2Style}
          >
            2
          </TweenOne>
          <TweenOne animation={animation2}>
            <h1>Presets</h1>
          </TweenOne>
          <TweenOne animation={animation3}>
            <span>Manage presets</span>
          </TweenOne>
        </div>

        <BgElement
          key="bottom-box-b"
          className="banner-anim-bottom-box"
          style={box2Style}
        >
          <i className="material-icons" style={{ fontSize: 54 }}>
            color_lens
          </i>
        </BgElement>
      </Element>
      <Element key="c">
        <div key="top-box-c" className="banner-anim-top-box">
          <TweenOne
            animation={animation1}
            className="banner-anim-page"
            style={box3Style}
          >
            3
          </TweenOne>
          <TweenOne animation={animation2}>
            <h1>Colors</h1>
          </TweenOne>
          <TweenOne animation={animation3}>
            <span>Pick any color</span>
          </TweenOne>
        </div>

        <BgElement
          key="bottom-box-c"
          className="banner-anim-bottom-box"
          style={box3Style}
        >
          <i className="material-icons" style={{ fontSize: 54 }}>
            colorize
          </i>
        </BgElement>
      </Element>
    </BannerAnim>
  );
}

export default Carousel;
