import { CarCard } from "../CarCard/CarCard"
import { selectCatalog, selectError, selectIsLoading } from "../../Store/catalog/catalog.selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCatalog } from "../../Store/catalog/catalog.operations";
import { LoadMoreButton, StyledList, StyledWrapper } from "./CarList.styled";

export const CarList = () => {  
    const catalog = useSelector(selectCatalog);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);


    const [page, setPage] = useState(1);
    const limit = 12 * page;
    const maxCards = 39;

    const handleLoadMore = () => {
        setPage(page+1);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCatalog({page, limit}))
    }, [dispatch, page])

   
    return (
        <StyledWrapper>
            <StyledList>
            {catalog.map(car => (
                <li key={car.id}>
                <CarCard car={car} />
                </li>
            ))}
            </StyledList>
            {limit <= maxCards && (
                <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
            )}
        </StyledWrapper>

      );
}