import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/slice";
import { rtkApi } from "@/api/rtkApi";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { sushiReducer } from "./sushi/slice/sushiSlice";
import { drinksReducer } from "./drinks/slice/drinksSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizzas: pizzasReducer,
    sushi: sushiReducer,
    drinks: drinksReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
