// import LearnCursive5 from "../picture/learnCursive5.jpg";
import LearnCursive6 from "../picture/learnCursive12.webp";
import LearnCursive7 from "../picture/learnCursive13.webp";
import LearnCursive8 from "../picture/learncursive42.webp";

import LearnCursive5 from "../picture/LeranCursive11.webp";

function LearnCursive(props) {
  let scrollPerAdjust = props.adjust;
  // console.log(scrollPerAdjust, "scroll adjust in sueapp2");

  let scrollPercentAdjust = scrollPerAdjust - 50;

  var imgStyle1 = {
    transform: `translate(0px,-${scrollPercentAdjust * 11}%)  `,
  };
  var imgStyle2 = {
    transform: `translate(0px,-${scrollPercentAdjust * 9}%)  scale(0.94) `,
  };
  var imgStyle3 = {
    transform: `translate(0px,-${scrollPercentAdjust * 6}%) scale(0.6)`,
  };
  var imgStyle4 = {
    transform: `translate(0px,-${scrollPercentAdjust * 7}%) scale(0.7) `,
  };

  return (
    <div>
      <img
        loading="lazy"
        className="photo1"
        src={LearnCursive5}
        alt="sueapp"
        style={imgStyle1}
      ></img>
      <img
        loading="lazy"
        className="photo2"
        src={LearnCursive6}
        alt="sueapp"
        style={imgStyle2}
      ></img>
      <img
        loading="lazy"
        className="photo3"
        src={LearnCursive7}
        alt="sueapp"
        style={imgStyle3}
      ></img>
      <img
        loading="lazy"
        className="photo4"
        src={LearnCursive8}
        alt="sueapp"
        style={imgStyle4}
      ></img>
    </div>
  );
}

export default LearnCursive;
