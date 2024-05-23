import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/slice";
import { rtkApi } from "@/api/rtkApi";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { sushiReducer } from "./sushi/slice/sushiSlice";
import { drinksReducer } from "./drinks/slice/drinksSlice";
import { productReducer } from "./productItem/slice/productItemSlice";



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizzas: pizzasReducer,
    sushi: sushiReducer,
    drinks: drinksReducer,
    product: productReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
