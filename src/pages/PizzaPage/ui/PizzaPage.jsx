import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import {
  getPizzas,
  getPizzasErrors,
  getPizzasLoading,
} from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchNextPizzasPage } from "@/redux/pizzas/services/fetchNextPizzasPage";
import { calcMinPricePizzas } from "@/utils/calcMinPricePizzas";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const PizzaPage = () => {
  const pizzas = useSelector(getPizzas);
  const error = useSelector(getPizzasErrors);
  const loading = useSelector(getPizzasLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    dispatch(fetchNextPizzasPage());
  }, [dispatch, inView]);

  if (error) {
    return <div>{error}</div>;
  }

  const item = pizzas.map((pizza) => {
    let minPrice = calcMinPricePizzas(pizza.sizes, pizza.doughs);

    return (
      <CartItem
        key={pizza.id}
        id={pizza.id}
        photo={pizza.photo}
        name={pizza.name}
        product={pizza.product}
        ingredients={pizza.ingredients}
        price={minPrice}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"Пиццы"} item={item} />
      {loading && <ProductLayoutSkeleton />}
      {!loading && <div ref={ref}></div>}
    </>
  );
};

export default PizzaPage;
