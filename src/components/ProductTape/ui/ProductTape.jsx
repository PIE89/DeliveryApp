import { CartItem } from "@/components/CartItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";

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
    };

    switch (el.product) {
      case productsName.PIZZA:
        return <CartItem {...props} ingredients={el.ingredients} />;

      case productsName.SUSHI:
        return <CartItem {...props} ingredients={el.ingredients} />;

      case productsName.DRINKS:
        return <CartItem {...props} />;

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
