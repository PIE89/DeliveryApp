import { Button } from "@/ui/Button";
import cls from "./CartItem.module.scss";
import { productsName } from "@/const/const";

const CartItem = ({
  id,
  photo = "",
  name = "",
  product = "",
  ingredients = [],
  description = "",
  price = 0,
}) => {
  const ingredientsInfo = ingredients.join(", ");

  return (
    <article className={cls.card} key={id}>
      <img src={photo} alt="photo" className={cls.img} />

      <div className={cls.body}>
        <div className={cls.info}>
          <p className={cls.title}>{name}</p>

          <span className={cls.text}>
            {product === productsName.OTHERS ? description : ingredientsInfo}
          </span>
        </div>

        <div className={cls.footer}>
          <Button border className={cls.button}>
            Выбрать
          </Button>
          <span>От {price} Р</span>
        </div>
      </div>
    </article>
  );
};

export { CartItem };
