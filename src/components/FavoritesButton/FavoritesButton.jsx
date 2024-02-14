import { NavLink } from "react-router-dom"
import {ReactComponent as Favorites} from '../../images/icons/heart.svg';


export const FavoritesButton = () => {
    return(
        <NavLink to= "/favorites">
            <Favorites/>
            <span>Favorites</span>
        </NavLink>
    )
}