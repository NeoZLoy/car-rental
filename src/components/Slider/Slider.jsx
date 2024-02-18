import { Advantages } from "../Advantages/Advantages";
import { FAQ } from "../FAQ/FAQ";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledContainer } from "./Slider.styled";



export const SliderComponent = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
    }

    return(
        <Slider {...sliderSettings}>
            <StyledContainer>
                <Advantages/>
            </StyledContainer>

            <StyledContainer>
                <FAQ/>
            </StyledContainer>
        </Slider>
    )
}
