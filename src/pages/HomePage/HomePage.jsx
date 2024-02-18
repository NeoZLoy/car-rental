import { useSelector } from "react-redux"
import { SliderComponent } from "../../components/Slider/Slider"
import { StyledImage, StyledWrapper } from "./HomePage.styled"
import { selectIsLoading } from "Store/catalog/catalog.selectors"

export const HomePage = () => {

    const isLoading = useSelector(selectIsLoading)
    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <StyledWrapper>
            <StyledImage src="https://advertising.expedia.com/wp-content/uploads/2020/08/Car-Hero_1920x800.jpg" alt="Car rental hero image"></StyledImage>
            <SliderComponent/>
        </StyledWrapper>
    )
}