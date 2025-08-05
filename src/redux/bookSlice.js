// src/redux/bookSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        list: [{
            title: "The Flash, Vol 1",
            author: "joshua Williamson",
            url: "src/assets/images/01.png",
        },
            {
                title: "Titans Vol 2",
                author: "Andrew Robinson",
                url: "src/assets/images/02.png"
            },
            {
                title: "Harly Quinn, Vol 1",
                author: "Jimmy Palmiotti",
                url: "src/assets/images/03.png",
            },
            {
                title: "Suicide Squad #8",
                author: "Tom Taylor",
                url: "src/assets/images/04.png"
            }],
    },
    reducers: {
        addBook: (state, action) => {
            state.list.push(action.payload); // Add new book to the list
        },
    },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
