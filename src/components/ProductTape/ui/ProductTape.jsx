import { CartItem } from "@/components/CartItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";
import { calcMinPrice } from "@/utils/calcMinPrice";

const ProductTape = (props) => {
  const { title, products = [], isLoading = false, error = undefined } = props;

  if (isLoading) {
    return <div>...loading</div>;
  }

  const items = products.map((el) => {
    const props = {
      key: el.id,
      photo: el.photo,
      name: el.name,
      product: el.product,
      description: el.description,
      sizes: el.sizes,
      doughs: el.doughs,
      pieces: el.pieces,
      price: el.price,
    };

    switch (el.product) {
      case productsName.PIZZA:
        return (
          <CartItem
            {...props}
            ingredients={el.ingredients}
            price={calcMinPrice(el.sizes, el.doughs)}
          />
        );

      case productsName.SUSHI:
        return (
          <CartItem
            {...props}
            ingredients={el.ingredients}
            price={calcMinPrice(el.pieces)}
          />
        );

      case productsName.DRINKS:
        return <CartItem {...props} price={el.price} />;

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
