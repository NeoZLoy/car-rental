import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6511bacdb8c6ce52b394f6d1.mockapi.io";




export const fetchCatalog = createAsyncThunk('/paginatedCatalog', async (params, thunkAPI) => {
    try {
        const res = await axios.get(`/catalog?page=${params.page}&limit=${params.limit}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const fetchAllCatalog = createAsyncThunk('/catalog', async(_, thunkAPI) => {
    try {
        const res = await axios.get('/catalog');
        return res.data
    } catch (error) {
        
    }
})

export const fetchCarById = createAsyncThunk('/catalog/id', async (id, thunkAPI) => {
    try {
        const res = await axios.get(`/catalog/${id}`)
        return
    } catch (error) {
        
    }
})