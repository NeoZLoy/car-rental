import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6511bacdb8c6ce52b394f6d1.mockapi.io";




export const fetchCatalog = createAsyncThunk('/catalog', async (params, thunkAPI) => {
    try {
        const res = await axios.get(`/catalog?page=${params.page}&limit=${params.limit}`, );
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

// export const fetchCarById = createAsyncThunk('/catalog/car', async(carId, thunkAPI) => {
//     try {
//         const res = await axios.get(`/catalog/${carId}`);
//         return res.data;
//     } catch (error) {
        
//     }
// })