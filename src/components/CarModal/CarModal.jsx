import { Modal } from "@mui/material"
import { BlackText, BlueText, StyledDescription, StyledTitle } from "components/CarCard/CarCard.styled"
import { StyledList } from "components/CarList/CarList.styled"


export const CarModal = ({open, handleClose, car}) => {

    const carConditions = car.rentalConditions.split('\n');
    console.log(carConditions)
    return (<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
            <img src={car.image} alt={car.make}/>
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
            <p>
                {car.description}
            </p>
            <div>
                <h4>Accessories and functionalities:</h4>
                    <StyledList>
                        {car.accessories.map(acc => (
                            <li key={Math.random}>{acc}</li>
                        ))}
                        {car.functionalities.map(func => (
                            <li key={Math.random}>{func}</li>
                        ))}
                    </StyledList>
            </div>
            <div>
                <h4>Rental Conditions: </h4>
                <StyledList>
                    {carConditions.map(condition => (
                        <li key={Math.random}>{condition}</li>
                    ))
                    }
                    <li >Mileage: <span>{car.milage}</span></li>
                    <li>Price: <span>{car.rentalPrice}</span></li>
                </StyledList>
                <a href="tel:+380730000000">Rental Car</a>
            </div>
        </div>
        
      </Modal>
)}