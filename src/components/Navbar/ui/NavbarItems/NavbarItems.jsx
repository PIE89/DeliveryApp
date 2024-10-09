import cls from "./NavbarItems.module.scss";
import { Icon } from "@/ui/Icon";
import { AppLink } from "@/ui/AppLink";

const NavbarItems = ({ item }) => {
  console.log(item.Icon);

  return (
    <AppLink activeClassName={cls.active} to={item.path} className={cls.link}>
      <Icon Svg={item.Icon} />
      <span className={cls.text}>{item.text}</span>
    </AppLink>
  );
};

export { NavbarItems };
