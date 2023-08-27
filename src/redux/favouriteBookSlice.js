import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
};

export const favouriteBookSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
      // console.log(state, '------REDUX addToFavourite');
    },
    unFavourite: (state, action) => {
      const updatedFavourites = state.favourites.filter(
        book => book !== action.payload
        );
        // console.log(state, '------REDUX unFavourite-----',action);
      return {
        ...state,
        favourites: updatedFavourites,
      };
    },
    
  },
});

export const {addToFavourite, unFavourite} = favouriteBookSlice.actions;
export const selectFavourite = state => state?.favourite?.favourites;
export default favouriteBookSlice.reducer;
