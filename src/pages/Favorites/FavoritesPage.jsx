import { selectCatalog } from "Store/catalog/catalog.selectors";
import { selectFavArr } from "Store/favorites/favorites.selectors"
import { FavoriteList } from "components/FavoriteList/FavoriteList";
import { useSelector } from "react-redux"

export const Favorites = () => {
 
    
    return (
        <section>
            <div>
            Filters
        </div>

        <div>
            <FavoriteList/>
        </div>
        </section>
    )
}