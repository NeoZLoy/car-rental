import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { makeFilter } from 'Store/filters/filters.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputLabel, MenuItem } from '@mui/material';
import { selectMake } from 'Store/filters/filters.selectors';
import { selectCatalog } from 'Store/catalog/catalog.selectors';
import { StyledButton, StyledWrapper } from './Filters.styled';

export const Filters = () => {
    //* Data
    const make = useSelector(selectMake);
    const catalog = useSelector(selectCatalog);
    const makesList = catalog.map(car => car.make);
    const makeFilterList = makesList.filter((item, index) => makesList.indexOf(item) === index);
 
    //* Filters handlers
    const dispatch = useDispatch();

    const handleMakeChange = (event) => {
        dispatch(makeFilter(event.target.value))
    }

   const resetFiltersHandler = () => {
    dispatch(makeFilter(''));
}   

    return (
        <StyledWrapper>
            <Box sx={{ width: 200, height: 48}}>
                <FormControl fullWidth>
                    <InputLabel id="make-label">Make</InputLabel>
                    <Select
                    labelId="make-label"
                    id = "make-select"
                    label="Make"
                    value={make}
                    onChange={handleMakeChange}
                    sx={{maxHeight: 48, borderRadius: '14px'}}
                    >
                        {makeFilterList.map(make => (
                        <MenuItem key = {make} value = {make}>{make}</MenuItem>
                        ))}

                    </Select>
                </FormControl>  
            </Box>
            <StyledButton onClick={resetFiltersHandler}>Reset filters</StyledButton>

        </StyledWrapper>
    )
}