import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import favouriteReducer from './favouriteBookSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, favouriteReducer);

// Export default through ES6 method
export default () => {
  const store = configureStore({
    reducer: {favourite: persistedReducer},

    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  });
  let persistor = persistStore(store);
  return {store, persistor};
};