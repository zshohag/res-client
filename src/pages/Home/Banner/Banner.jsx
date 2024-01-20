import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <div >
      <Carousel  showStatus={false} autoPlay={true} >
        <div>
          <img  src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

/* 



http://react-responsive-carousel.js.org/storybook/index.html?path=/story/01-basic--base&knob-showArrows_Toggles=true&knob-showStatus_Toggles=true&knob-showIndicators_Toggles=true&knob-infiniteLoop_Toggles=true&knob-showThumbs_Toggles=true&knob-useKeyboardArrows_Toggles=true&knob-autoPlay_Toggles=&knob-stopOnHover_Toggles=true&knob-swipeable_Toggles=true&knob-dynamicHeight_Toggles=true&knob-emulateTouch_Toggles=true&knob-autoFocus_Toggles=&knob-thumbWidth_Values=100&knob-selectedItem_Values=0&knob-interval_Values=2000&knob-transitionTime_Values=500&knob-swipeScrollTolerance_Values=5


*/
