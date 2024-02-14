import { NavLink } from "react-router-dom"
import {ReactComponent as Home} from '../../images/icons/home.svg';


export const HomeButton = () => {
    <div>
        <NavLink to="/">
            <Home/>
            <span>Home page</span>
        </NavLink>
    </div>
    
}