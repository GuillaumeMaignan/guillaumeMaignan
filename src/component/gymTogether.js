import picturegym5 from "../picture/gympicture51.webp";
import picturegym7 from "../picture/gympicture71.webp";
import picturegym8 from "../picture/gympicture8.webp";
import picturegym9 from "../picture/gympictureempty2.webp";

function GymTogether(props) {
  let scrollPerAdjust = props.adjust;
  // console.log(scrollPerAdjust, "scroll adjust in sueapp2");

  let scrollPercentAdjust = scrollPerAdjust - 10;

  var imgStyle1 = {
    transform: `translate(0px,-${scrollPercentAdjust * 12}%)  `,
  };
  var imgStyle2 = {
    transform: `translate(0px,-${scrollPercentAdjust * 8}%)  scale(0.94) `,
  };
  var imgStyle3 = {
    transform: `translate(0px,-${scrollPercentAdjust * 5}%) scale(0.6)`,
  };
  var imgStyle4 = {
    transform: `translate(0px,-${scrollPercentAdjust * 6}%) scale(0.7) `,
  };

  return (
    <div>
      <img
        className="photo1"
        src={picturegym8}
        alt="gym-together 1"
        style={imgStyle1}
      ></img>
      <img
        className="photo2"
        src={picturegym9}
        alt="gym-together 2"
        style={imgStyle2}
      ></img>
      <img
        className="photo3"
        src={picturegym7}
        alt="gym-together 3"
        style={imgStyle3}
      ></img>
      <img
        className="photo4"
        src={picturegym5}
        alt="gym-together 3"
        style={imgStyle4}
      ></img>
    </div>
  );
}

export default GymTogether;
