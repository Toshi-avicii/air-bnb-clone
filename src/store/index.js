import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileReducer';
import globalReducer from './reducers/globalReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import wishlistReducer from './reducers/wishlistReducer';

const persistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    profile: profileReducer,
    global: globalReducer,
    wishlist: wishlistReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: {
        "appReducers": persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                'appReducers/profile/fetchProfileData', 
                'wishlist/addToWishlist',
                'persist/PERSIST'
            ]
        }
    }),
    devTools: process.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store);