import { createSlice } from "@reduxjs/toolkit"

const filters = createSlice({
    name: 'filters',
    initialState:{
        maker: '',
        price: '',
        milage: '',

    },
    reducers:{
        filterCatalog(state, action){
            state.maker = action.payload.maker;
            state.price = action.payload.price;
            state.milage = action.payload.milage;
        }
    }
})

export const filtersReducer = filters.reducer;
export const {filterCatalog} = filters.actions;