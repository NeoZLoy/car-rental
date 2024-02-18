import { fetchAllCatalog } from "Store/catalog/catalog.operations";
import { selectCatalog, selectIsLoading } from "Store/catalog/catalog.selectors"
import { selectFavArr } from "Store/favorites/favorites.selectors";
import { CarCard } from "components/CarCard/CarCard";
import { StyledList, StyledWrapper } from "components/CarList/CarList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const FavoriteList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCatalog())
    }, [dispatch])

    const isLoading = useSelector(selectIsLoading);
    const favId = useSelector(selectFavArr);
    const catalog = useSelector(selectCatalog);
    const favoriteCars = catalog.filter(car => favId.includes(`${car.id}`));

    return isLoading 
    ?
    <p>Loading...</p>
    :
    <StyledWrapper>
        <StyledList>
            {favoriteCars.map(car => (
                <li key={car.id} className="carCard" carid={car.id}>
                    <CarCard car={car}/>
                </li>
                
            ))}
        </StyledList>
    </StyledWrapper>
    
   
    
}