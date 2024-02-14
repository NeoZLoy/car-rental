import { NavLink } from "react-router-dom"
import {ReactComponent as Search} from '../../images/icons/search.svg';


export const CatalogButton = () => {
    return(
        <NavLink to="/catalog">
            <Search/>
            <span>Catalog</span>
        </NavLink>
    )
}