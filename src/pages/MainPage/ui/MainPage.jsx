import { useGetDrinks, useGetPizzas, useGetSushi } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {
  const {
    data: productsPizza,
    isLoading: loadingPizza,
    error: errorPizza,
  } = useGetPizzas();

  const {
    data: productsSushi,
    isLoading: loadingSushi,
    error: errorSushi,
  } = useGetSushi();

  const {
    data: productsDrinks,
    isLoading: loadingDrinks,
    error: errorDrinks,
  } = useGetDrinks();

  return (
    <>
      <ProductTape
        title="Пиццы"
        products={productsPizza}
        isLoading={loadingPizza}
        error={errorPizza}
      />
      <ProductTape
        title="Суши"
        products={productsSushi}
        isLoading={loadingSushi}
        error={errorSushi}
      />
      <ProductTape
        title="Напитки"
        products={productsDrinks}
        isLoading={loadingDrinks}
        error={errorDrinks}
      />
    </>
  );
};

export default MainPage;
