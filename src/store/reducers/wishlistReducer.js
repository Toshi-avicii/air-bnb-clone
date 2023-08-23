import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        rooms: [],
        totalPrice: 0,
        totalRooms: 0
    },
    reducers: {
        addToWishlist: (state, action) => {
            const foundedRoom = state.rooms.find((room) => {
                return room.id === action.payload.id;
            });
            if(foundedRoom) {
                return;
            }
            if(!foundedRoom) {
                state.rooms.push({
                    id: action.payload.id,
                    roomImage: action.payload.roomImage,
                    mainAddress: action.payload.mainAddress,
                    secondaryAddress: action.payload.secondaryAddress,
                    stay: action.payload.stay ? action.payload.stay : action.payload.stayDate,
                    rating: action.payload.rating,
                    category: action.payload.category,
                    roomOwnerPic: action.payload.roomOwner ? action.payload.roomOwner : null,
                    roomPrice: action.payload.price ? action.payload.price : action.payload.pricePerNight
                });
                
                const totalRoomPrice = state.rooms.reduce((accumulator, room) => {
                    return accumulator + room.roomPrice;
                }, 0);
                
                state.totalPrice = totalRoomPrice;

                state.totalRooms = state.rooms.length;
                
            }
        },

        removeFromWishlist: (state, action) => {
            const remainingRooms = state.rooms.filter((room) => {
                return room.id !== action.payload.roomId;
            })

            state.rooms = remainingRooms;

            let remainingTotalPrice = 0;

            remainingRooms.forEach((room) => {
                remainingTotalPrice += room.roomPrice;
            });

            state.totalPrice = remainingTotalPrice;

            state.totalRooms = remainingRooms.length;
        }
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;