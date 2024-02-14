import { Advantages } from "components/Advantages/Advantages";
import { FAQ } from "components/FAQ/FAQ";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const SliderComponent = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,

    }

    return(
        <Slider {...sliderSettings}>
            <div>
                <Advantages/>
            </div>

            <div>
                <FAQ/>
            </div>

            <div>

            </div>

            <div>

            </div>
        </Slider>
    )
}
