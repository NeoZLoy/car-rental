import { SliderComponent } from "../../components/Slider/Slider"
import { FavoritesButton } from "../../components/FavoritesButton/FavoritesButton"
import { CatalogButton } from "../../components/CatalogButton/CatalogButton"
import { HomeButton } from "../../components/HomeButton/HomeButton"

export const HomePage = () => {
    return (
        <section>
            <div>
                Logo
            </div>
            <div>
                <HomeButton/>
                <CatalogButton/>
                <FavoritesButton/>
            </div>

            <SliderComponent/>
        </section>
    )
}