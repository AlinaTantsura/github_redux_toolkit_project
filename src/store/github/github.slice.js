import { createSlice } from "@reduxjs/toolkit"; 

const LS_FAVORITE_KEY = "favorite"
const initialState = {
    favorite: JSON.parse(localStorage.getItem(LS_FAVORITE_KEY) ?? "[]")
};

export const githubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favorite.push(action.payload);
            localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorite))
        },
        removeFavorite(state, action) {
            state.favorite.filter(favItem => favItem.id !== action.payload);
            localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorite))
        }
    }
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
