import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        displayTaxes: false,
    },
    reducers: {
        showPricesWithTaxes: (state) => {
            state.displayTaxes = true;
        },
        showPricesWithoutTaxes: (state) => {
            state.displayTaxes = false;
        }
    }
});

export const { showPricesWithTaxes, showPricesWithoutTaxes } = globalSlice.actions;
export default globalSlice.reducer;