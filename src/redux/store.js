import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});
