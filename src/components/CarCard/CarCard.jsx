import { toggleFavorites } from "Store/favorites/favorites.slice"
import { 
    BlackText, 
    BlueText, 
    StyledButton, 
    StyledCardWrapper, 
    StyledDescription, 
    StyledFavButton, 
    StyledFavIcon, 
    StyledImage, 
    StyledTitle 
} from "./CarCard.styled"
import { useDispatch, useSelector } from "react-redux"
import { selectFavArr } from "Store/favorites/favorites.selectors";
import { CarModal } from "components/CarModal/CarModal";
import { useState } from "react";


export const CarCard = ({car}) => {

    const dispatch = useDispatch();
    const favList = useSelector(selectFavArr)

    const handleFavClick = (event) => {
        const carId = event.target.closest('.carCard').getAttribute('carid');
        dispatch(toggleFavorites(carId));
    }

    const isFav = favList.includes(`${car.id}`)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <StyledCardWrapper >
            <StyledFavButton onClick={handleFavClick}>
             <StyledFavIcon $isfav = {isFav}/>
            </StyledFavButton>
            <div>
                <StyledImage src={car.img} alt={car.make && car.model}/>
            </div>
            <div>
                <StyledTitle>
                    <p>
                        <BlackText>{car.make} </BlackText> 
                        <BlueText>{car.model} </BlueText> 
                        <BlackText>{car.year} </BlackText> 
                    </p>
                    <p>
                        <BlackText>{car.rentalPrice}</BlackText>
                    </p> 
                </StyledTitle>
                <StyledDescription>
                    {car.address.split(',')[1]} | {car.rentalCompany} | {car.type} | {car.model} | {car.mileage} | {car.functionalities[0]}
                </StyledDescription>
               <StyledButton onClick={handleOpen}>Learn more</StyledButton> 
               <CarModal open={open} handleClose={handleClose} car={car}/>
            </div>
            
        </StyledCardWrapper>
    )
}