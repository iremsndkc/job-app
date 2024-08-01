import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    isLoading: false,
    error: null,
};

const jobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        setLoading:(state) => {
            state.isLoading = true;
        },
        setError:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        setJobs: (state,action) => {
            state.isLoading = false;
            state.error = null;
            state.jobs = action.payload;
        },
        createJob:(state, action) => {
            state.jobs.push(action.payload);
        },
        deleteJob:(state, action) => {
            const index = state.jobs.findIndex(i => i.id === action.payload);
            state.jobs.splice(index,1);
        },
    },
});

export default jobSlice.reducer;

export const {setLoading, createJob, setJobs, setError, deleteJob} = jobSlice.actions;