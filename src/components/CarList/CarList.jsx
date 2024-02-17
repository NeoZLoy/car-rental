import { CarCard } from "../CarCard/CarCard"
import { selectCatalog, selectError, selectIsLoading, selectPaginatedCatalog } from "../../Store/catalog/catalog.selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllCatalog, fetchCatalog } from "../../Store/catalog/catalog.operations";
import { LoadMoreButton, StyledList, StyledWrapper } from "./CarList.styled";
import { selectMake, selectPrice } from "Store/filters/filters.selectors";

export const CarList = () => {  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCatalog())
    }, [dispatch])

    const paginatedCatalog = useSelector(selectPaginatedCatalog);
    const allCatalog = useSelector(selectCatalog);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);


    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const maxCards = 39;

    const handleLoadMore = () => {
        setLimit(limit+12);
    }

    useEffect(() => {
        dispatch(fetchCatalog({page, limit}));
    }, [dispatch, page, limit])

    const makeFilter = useSelector(selectMake);
    const priceFilter = useSelector(selectPrice);
        
    const filterList = () => {
        if (makeFilter !== '' || priceFilter.min !== 0 || priceFilter.max !== 0){
           return allCatalog.filter(car => car.make === makeFilter);
        } else {
            return paginatedCatalog;
        }
    };

    // const filterPrice = () => {
    //     if(priceFilter.min !== 0 || priceFilter.max !== 0){
    //         return allCatalog.filter(car => car.rentalPrice >= priceFilter.min && car.rentalPrice <= priceFilter.min )
    //     }
    // }

    const filteredList = filterList();
   
    return isLoading 
    ?
    <p>Loading...</p>
    :
        <StyledWrapper>
            <StyledList>
            {filteredList.map(car => (
                <li key={car.id} className="carCard" carid={car.id}>
                <CarCard car={car} />
                </li>
            ))}
            </StyledList>
            {limit < maxCards && (
                <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
            )}
        </StyledWrapper>

      ;
}