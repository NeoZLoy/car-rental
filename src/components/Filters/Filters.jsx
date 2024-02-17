import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { makeFilter, minPriceFilter, maxPriceFilter } from 'Store/filters/filters.slice';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem } from '@mui/material';
import { selectMake, selectMilage, selectPrice } from 'Store/filters/filters.selectors';
import { selectCatalog } from 'Store/catalog/catalog.selectors';

export const Filters = () => {
    //* Data
    const make = useSelector(selectMake);
    const price = useSelector(selectPrice);
    const milage = useSelector(selectMilage);
    const catalog = useSelector(selectCatalog);
    const makesList = catalog.map(car => car.make);
    const makeFilterList = makesList.filter((item, index) => makesList.indexOf(item) === index);
    const prices = Array.from({length:16}, (_, index) => (index) * 10);

    const carPrices = catalog.map(car => Number(car.rentalPrice.split('$')[1]))
    const minPrice = Math.min(...carPrices);
    const maxPrice = Math.max(...carPrices);

    //* Filters handlers
    const dispatch = useDispatch();

    const handleMakeChange = (event) => {
        dispatch(makeFilter(event.target.value))
    }

   const handleMinPriceChange = (event) => {
    dispatch(minPriceFilter(event.target.value))
   }
   const handleMaxPriceChange = (event) => {
    dispatch(maxPriceFilter(event.target.value))
   }

   const resetFiltersHandler = () => {
    dispatch(makeFilter(''))
}   

    return (
        <div>
            <FormControl>
                <InputLabel id="make-label">Make</InputLabel>
                <Select
                labelId="make-label"
                id = "make-select"
                label="Make"
                value={make}
                onChange={handleMakeChange}
                >
                    {makeFilterList.map(make => (
                    <MenuItem key = {make} value = {make}>{make}</MenuItem>
                    ))}

                </Select>
            </FormControl>
            <div>
                <InputLabel id="min-price-label">Min price</InputLabel>
                <Select
                labelId="min-price-label"
                id = "min-price-select"
                label="Min price"
                value={price.min}
                onChange={handleMinPriceChange}
                >
                     {prices.map(price => (
                    <MenuItem key = {price} value = {price}>{price}</MenuItem>
                    ))}

                </Select>

                <InputLabel id="max-price-label">Max price</InputLabel>
                <Select
                labelId="max-price-label"
                id = "max-price-select"
                label="Max price"
                value={price.max}
                onChange={handleMaxPriceChange}
                >
                    {prices.map(price => (
                    <MenuItem key = {price} value = {price}>{price}</MenuItem>
                    ))}

                </Select>
            </div>
              

            <button onClick={resetFiltersHandler}>Reset filters</button>

        </div>
    )
}