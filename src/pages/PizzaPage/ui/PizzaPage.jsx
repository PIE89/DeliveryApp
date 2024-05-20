import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import {
  getPizzas,
  getPizzasErrors,
  getPizzasLoading,
} from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchPizzas } from "@/redux/pizzas/services/fetchPizzas";
import { calcMinPrice } from "@/utils/calcMinPrice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PizzaPage = () => {
  const pizzas = useSelector(getPizzas);
  const error = useSelector(getPizzasErrors);
  const loading = useSelector(getPizzasLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  const item = pizzas.map((pizza) => {
    return (
      <CartItem
        key={pizza.id}
        id={pizza.id}
        photo={pizza.photo}
        name={pizza.name}
        product={pizza.product}
        ingredients={pizza.ingredients}
        price={calcMinPrice(pizza.sizes, pizza.doughs)}
      />
    );
  });

  return <ProductLayout header={"Пиццы"} item={item} />;
};

export default PizzaPage;
