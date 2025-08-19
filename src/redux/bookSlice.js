// src/redux/bookSlice.js
//all books should have an empty array otherwise it won't display the first chpater 
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        list: [{
            id: 1,
            title: "The Flash, Vol 1",
            description: "A Flash vol 1 description is a brief summary of a book's plot,characters, and themes.It helps readers get a sense of whatthe book is about.Book descriptions are often found on theback cover of the book, or on retailer websites.",
            author: "joshua Williamson",
            url: "../src/assets/images/01.png",
            chapters: [{
                chapterNo: "chapter 1",
                title: "first chapter",
                endDate: "12/07/2024",
                status: "pending"
            }]
        },
        {
            id: 2,
            title: "Titans Vol 2",
            description: "A flash vol 2 description is a brief summary of a book's plot,characters, and themes.It helps readers get a sense of whatthe book is about.Book descriptions are often found on theback cover of the book, or on retailer websites.",
            author: "Andrew Robinson",
            url: "../src/assets/images/02.png"
        },
        {
            id: 3,
            title: "Harly Quinn, Vol 1",
            description: "A Harly Quinn description is a brief summary of a book's plot,characters, and themes.It helps readers get a sense of whatthe book is about.Book descriptions are often found on theback cover of the book, or on retailer websites.",
            author: "Jimmy Palmiotti",
            url: "../src/assets/images/03.png"
        },
        {
            id: 4,
            title: "Suicide Squad #8",
            description: "A suicide description is a brief summary of a book's plot,characters, and themes.It helps readers get a sense of whatthe book is about.Book descriptions are often found on theback cover of the book, or on retailer websites.",
            author: "Tom Taylor",
            url: "../src/assets/images/04.png"
        }],
    },
    reducers: {
        addBook: (state, action) => {
            state.list.push(action.payload); // Add new book to the list
        },
        addChapter: (state, action) => {
            const { bookId, chapter } = action.payload;
            const book = state.list.find(book => bookId == book.id)
            if (book) {
                if (!book.chapters) {
                    book.chapters = [];
                    book.chapters.push(chapter)
                } else {
                    book.chapters.push(chapter)
                }
            }
        },
        updateChapterStatus: (state, action) => {
            const { bookId, chapterNo } = action.payload;

            const book = state.list.find(book => bookId == book.id)

            if (book) {
                const chapter = book.chapters.find(item => item.chapterNo == chapterNo)
                chapter.status = "completed"
            }
        }
    },
});

export const { addBook, addChapter, updateChapterStatus } = bookSlice.actions;
export default bookSlice.reducer;
