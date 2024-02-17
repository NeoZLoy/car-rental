import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCatalog, fetchCarById, fetchCatalog } from "./catalog.operations";

const catalog = createSlice({
    name: 'catalog',
    initialState: {
        catalog: [],
        car: {},
        paginatedCatalog: [],
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
            state.paginatedCatalog = action.payload;
        })
        .addCase(fetchCatalog.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(fetchAllCatalog.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchAllCatalog.fulfilled, (state, action) => {
            state.catalog = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchAllCatalog.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
        .addCase(fetchCarById.pending, (state, action) => {
            state.error = null;
            state.isLoading = null;
        })
        .addCase(fetchCarById.fulfilled, (state, action) => {
            state.car = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchCarById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })

    }
})

export const catalogReducer = catalog.reducer;