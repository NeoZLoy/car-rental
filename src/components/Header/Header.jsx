import { NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from '../../images/icons/logo.svg';

export const Header = () => {
    <ul>
        <li>
            <NavLink to = "/">
                <span>
                    Car
                </span>
                <Logo/>
                <span>
                    Rental
                </span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/catalog">
                Catalog
            </NavLink>
        </li>
        <li>
            <NavLink to="/favorites">
                Favorites
            </NavLink>
        </li>
    </ul>
}