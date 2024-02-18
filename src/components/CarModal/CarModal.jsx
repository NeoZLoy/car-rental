import { Modal, Box } from '@mui/material';
import { BlackText, BlueText, StyledTitle } from "components/CarCard/CarCard.styled"
import { StyledList } from "components/CarList/CarList.styled"
import { v4 as uuidv4 } from 'uuid';
import { CarDescription, CloseButton, CloseIcon, StyledAcc, StyledAccItem, StyledAccList, StyledButton, StyledConditionItem, StyledConditionList, StyledConditionSpan, StyledDescription, StyledImage, StyledSubtitle, StyledTitleWrapper } from './CarModal.styled';

export const CarModal = ({open, handleClose, car}) => {

    const address = car.address.split(', ');
    const country = address[address.length - 1];
    const city = address[address.length - 2];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 541,
        bgcolor: '#fff',
        boxShadow: 24,
        borderRadius: '24px',
        p: "40px",
      };
      

    const carConditions = car.rentalConditions.split('\n');

    const mileage = car.mileage.toLocaleString('en-US')

    return (<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CloseButton onClick={handleClose}><CloseIcon/></CloseButton>
            <StyledImage src={car.img} alt={car.make}/>
            <StyledTitleWrapper>
                <StyledTitle>
                    <p>
                        <BlackText>{car.make} </BlackText> 
                        <BlueText>{car.model} </BlueText> 
                        <BlackText>{car.year} </BlackText> 
                    </p>
                </StyledTitle>
                    <StyledDescription>
                        {city} | {country} | {`id: ${car.id}`} | {`Year ${car.year}`} | {`Type: ${car.type}`}| {`Fuel Consumption: ${car.fuelConsumption}`} | {`Engine size: ${car.engineSize}`}
                </StyledDescription>
            </StyledTitleWrapper>
         
            <CarDescription>
                {car.description}
            </CarDescription>
            <div>
                <StyledSubtitle>Accessories and functionalities:</StyledSubtitle>
                    <StyledAcc>
                        <StyledAccList>
                            {car.accessories.map(acc => (
                                <StyledAccItem key={uuidv4()}>{acc}</StyledAccItem>
                            ))}
                        </StyledAccList> 
                        <StyledAccList>
                            {car.functionalities.map(func => (
                                <StyledAccItem key={uuidv4()}>{func}</StyledAccItem>
                            ))}
                        </StyledAccList>                    
                    </StyledAcc>
            </div>
            <div>
                <StyledSubtitle>Rental Conditions: </StyledSubtitle>
                <StyledConditionList>
                    {carConditions.map(condition => (
                        <StyledConditionItem key={uuidv4()}>
                            <span>
                            {condition.split(':')[0]}
                            </span>
                            <StyledConditionSpan>
                            {condition.split(':')[1]}
                            </StyledConditionSpan>
                        </StyledConditionItem>
                    ))
                    }
                    <StyledConditionItem >Mileage: <StyledConditionSpan>{mileage}</StyledConditionSpan></StyledConditionItem>
                    <StyledConditionItem>Price: <StyledConditionSpan>{car.rentalPrice}</StyledConditionSpan></StyledConditionItem>
                </StyledConditionList>
                <StyledButton href="tel:+380730000000">Rental Car</StyledButton>
            </div>
        </Box>
        
      </Modal>
)}