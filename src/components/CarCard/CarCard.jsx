import { BlackText, BlueText, StyledButton, StyledCardWrapper, StyledDescription, StyledImage, StyledTitle } from "./CarCard.styled"

export const CarCard = ({car}) => {
    return(
        <StyledCardWrapper>
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
               <StyledButton>Learn more</StyledButton> 
            </div>
            
        </StyledCardWrapper>
    )
}