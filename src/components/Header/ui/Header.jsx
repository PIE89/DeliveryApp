import cls from "./Header.module.scss";
import LogoSvg from "@/assets/img/icons/logo.svg";
import Btn from "@/assets/img/icons/btn.svg";
import Basket from "@/assets/img/icons/basket.svg";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { Modal } from "@/ui/Modal";
import { useState } from "react";
import { BasketItem } from "@/components/BasketItem";

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  const onClick = () => {
    navigate("/");
  };

  const { toggleTheme } = useTheme();

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <>
      <header className={cls.header}>
        <div className={cls.container}>
          <div className={cls.content}>
            <div className={cls.logo}>
              <Icon Svg={LogoSvg} clickable onClick={onClick} />

              <h3 className={cls.headerTitle}>Webcademy пицца</h3>
            </div>
            <div className={cls.buttons}>
              <Icon Svg={Btn} clickable onClick={toggleThemeHandler} />

              <Button onClick={handleClick} border className={cls.button}>
                <Icon Svg={Basket} />
                <span>0 ₽</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Modal
        type={"rightModal"}
        width={420}
        height={"100%"}
        scroll={"auto"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className={cls.body}>
          <BasketItem />

          <div className={cls.footer}>
            <div className={cls.totalPrice}>
              <span>Итого: 0 ₽</span>
            </div>

            <Button border >Оформить заказ</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { Header };
