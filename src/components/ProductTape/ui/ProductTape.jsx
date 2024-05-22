/* eslint-disable no-case-declarations */
import { CartItem, CartItemSkeleton } from "@/components/CartItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";
import { calcMinPricePizzas } from "@/utils/calcMinPricePizzas";
import { Skeleton } from "@/ui/Skeleton";

export const getSkeletons = () => {
  return (
    <section className={cls.products}>
      <h2 className={cls.title}>
        <Skeleton width={200} height={50} />
      </h2>

      <div className={cls.card}>
        {new Array(4).fill(0).map((_, i) => (
          <CartItemSkeleton key={i} />
        ))}
      </div>
    </section>
  );
};

const ProductTape = (props) => {
  const { title, products = [], isLoading = false, error = undefined } = props;

  if (isLoading) {
    return getSkeletons();
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
