import { Link } from "react-router-dom";
import cls from "./ProductLayout.module.scss";

const ProductLayout = (props) => {
  const { header, item } = props;
  return (
    <>
      <Link className={cls.link} to={"/"}>
        Вернуться назад
      </Link>

      <section className={cls.section}>
        <h3 className={cls.header}>{header}</h3>

        <div className={cls.content}>{item}</div>
      </section>
    </>
  );
};

export { ProductLayout };
