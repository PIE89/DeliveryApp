/* eslint-disable no-case-declarations */
import { CartItem } from "@/components/CartItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";
import { calcMinPricePizzas } from "@/utils/calcMinPricePizzas";

const ProductTape = (props) => {
  const { title, products = [], isLoading = false, error = undefined } = props;

  if (isLoading) {
    return <div>...loading</div>;
  }

  const items = products.map((el) => {
    const props = {
      key: el.id,
      id: el.id,
      name: el.name,
      photo: el.photo,
      product: el.product,
    };

    switch (el.product) {
      case productsName.PIZZA:
        return (
          <CartItem
            {...props}
            ingredients={el.ingredients}
            price={calcMinPricePizzas(el.sizes, el.doughs)}
          />
        );

      case productsName.SUSHI:
        const prices = el.pieces.map((el) => el.price);
        const minPriceSushi = Math.min(...prices);

        return (
          <CartItem
            {...props}
            ingredients={el.ingredients}
            price={minPriceSushi}
          />
        );

      case productsName.DRINKS:
        return (
          <CartItem {...props} price={el.price} description={el.description} />
        );

      default:
        null;
    }
  });

  return (
    <section className={cls.products}>
      <h2 className={cls.title}>{title}</h2>

      {error && (
        <div className="error">
          Не удалось получить список товаров. Перезагрузите страницу
        </div>
      )}

      <div className={cls.card}>{items}</div>
    </section>
  );
};

export { ProductTape };
