import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/api/rtkApi";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { sushiReducer } from "./sushi/slice/sushiSlice";
import { drinksReducer } from "./drinks/slice/drinksSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { basketReducer } from "./basket/slice/basketSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    sushi: sushiReducer,
    drinks: drinksReducer,
    product: productReducer,
    basket: basketReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
