import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    profile: profileReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: {
        "profileReducer": persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['profile/fetchProfileData']
        }
    }),
    devTools: process.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store);