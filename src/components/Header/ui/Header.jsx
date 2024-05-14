import cls from "./Header.module.scss";
import LogoSvg from "@/assets/img/icons/logo.svg";
import Btn from "@/assets/img/icons/btn.svg";
import Basket from "@/assets/img/icons/basket.svg";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.logo}>
            <Icon Svg={LogoSvg} clickable onClick={onClick} />

            <h3 className={cls.headerTitle}> Webcademy пицца</h3>
          </div>
          <div className={cls.buttons}>
            <Icon Svg={Btn} />

            <Button border className={cls.button}>
              <Icon Svg={Basket} />
              <span>0 ₽</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
