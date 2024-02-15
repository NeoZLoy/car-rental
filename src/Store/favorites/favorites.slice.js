import { createSlice } from "@reduxjs/toolkit";

const favorites = createSlice({
    name: 'favorites',
    initialState: {
        favoritesList: [],
    },
    reducers: {
        toggleFavorites(state, action){
            if(state.favoritesList.includes(action.payload)){
                const updatedArr = state.favoritesList.filter(item => item !== action.payload);
                state.favoritesList = updatedArr;
            } else{
                state.favoritesList.push(action.payload)
            }
        }
    }
})

export const favoritesReducer = favorites.reducer;
export const { toggleFavorites } = favorites.actions;