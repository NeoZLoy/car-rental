import { createSlice } from "@reduxjs/toolkit"

const filters = createSlice({
    name: 'filters',
    initialState:{
        make: '',
        price: {
            min: 0,
            max: 0,
        },
        milage: {
            min: 0,
            max: 0,
        },

    },
    reducers:{
        makeFilter(state, action){
            state.make = action.payload;
        },
        minPriceFilter(state, action){
            state.price.min = action.payload;
        },
        maxPriceFilter(state, action){
            state.price.max = action.payload;
        },
        minMilageFilter(state, action){
            state.milage.min = action.payload;
        },
        maxMilageFilter(state, action){
            state.milage.max = action.payload;
        }
    }
})

export const filtersReducer = filters.reducer;
export const {makeFilter, minPriceFilter, maxPriceFilter, minMilageFilter, maxMilageFilter} = filters.actions;