import { Button } from "@/ui/Button";
import cls from "./ModalItemLayout.module.scss";
import { useDispatch } from "react-redux";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { useContext } from "react";
import { LayoutContext } from "@/provider/LayoutContextProvider";

const ModalItemLayout = (props) => {
  const { params, options, price } = props;

  const { setIsOpen } = useContext(LayoutContext);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(basketActions.addItem({ ...params, price }));
    setIsOpen(false);
  };

  return (
    <div className={cls.body}>
      <img className={cls.img} src={params.photo} />

      <div className={cls.content}>
        <h3 className={cls.title}>{params.name}</h3>

        {options && options}

        <div className={cls.footer}>
          <span className={cls.price}>Итого: {price} ₽</span>

          <Button onClick={onClick} border className={cls.button}>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ModalItemLayout };
