import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        displayTaxes: false,
        isBeingAddedToWishlist: false,
        isBeingRemovedFromWishlist: false,
    },
    reducers: {
        showPricesWithTaxes: (state) => {
            state.displayTaxes = true;
        },
        showPricesWithoutTaxes: (state) => {
            state.displayTaxes = false;
        },

        showWishlistToastAddition: (state) => {
            state.isBeingAddedToWishlist = true;
            state.isBeingRemovedFromWishlist = false;
        },

        showWishlistToastRemoval: (state) => {
            state.isBeingAddedToWishlist = false;
            state.isBeingRemovedFromWishlist = true;
        }
    }
});

export const { 
    showPricesWithTaxes, 
    showPricesWithoutTaxes,
    showWishlistToastAddition,
    showWishlistToastRemoval 
} = globalSlice.actions;
export default globalSlice.reducer;