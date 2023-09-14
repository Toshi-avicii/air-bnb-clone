import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlists: [
            {
                defaultWishlist: {
                    rooms: [],
                    totalPrice: 0,
                    totalRooms: 0
                }
            }
        ]
    },
    reducers: {
        addToWishlist: (state, action) => {
            const foundedRoom = state.wishlists[0].defaultWishlist.rooms.find((room) => {
                return room.id === action.payload.id;
            });
            if(foundedRoom) {
                return;
            }
            if(!foundedRoom) {
                state.wishlists[0].defaultWishlist.rooms.push({
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
                
                const totalRoomPrice = state.wishlists[0].defaultWishlist.rooms.reduce((accumulator, room) => {
                    return accumulator + room.roomPrice;
                }, 0);
                
                state.wishlists[0].defaultWishlist.totalPrice = totalRoomPrice;

                state.wishlists[0].defaultWishlist.totalRooms = state.wishlists[0].defaultWishlist.rooms.length;
                
            }
        },

        removeFromWishlist: (state, action) => {
            const remainingRooms = state.wishlists[0].defaultWishlist.rooms.filter((room) => {
                return room.id !== action.payload.roomId;
            })

            state.wishlists[0].defaultWishlist.rooms = remainingRooms;

            let remainingTotalPrice = 0;

            remainingRooms.forEach((room) => {
                remainingTotalPrice += room.roomPrice;
            });

            state.wishlists[0].defaultWishlist.totalPrice = remainingTotalPrice;

            state.wishlists[0].defaultWishlist.totalRooms = remainingRooms.length;
        }
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;