import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./catalog.operations";

const catalog = createSlice({
    name: 'catalog',
    initialState: {
        catalog: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCatalog.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchCatalog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.catalog = action.payload;
        })
        .addCase(fetchCatalog.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const catalogReducer = catalog.reducer;