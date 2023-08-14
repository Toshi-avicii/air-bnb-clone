import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        dob: '',
        profilePic: ''
    },
    reducers: {
        fetchProfileData: (state, action) => {

            if(action.payload.firstName) {
                state.firstName = action.payload.firstName;
            }

            if(action.payload.lastName) {
                state.lastName = action.payload.lastName;
            }

            if(action.payload.country) {
                state.country = action.payload.country;
            }

            if(action.payload.email) {
                state.email = action.payload.email;
            }

            if(action.payload.dob) {
                state.dob = action.payload.dob;
            }

            if(action.payload.phoneNumber) {
                state.phoneNumber = Number(action.payload.phoneNumber);
            }
        },

        uploadProfilePic: (state, action) => {
            if(action.payload.profilePic) {
                state.profilePic = action.payload.profilePic
            }
        }
    }
})

export const { fetchProfileData, uploadProfilePic } = profileSlice.actions;
export default profileSlice.reducer