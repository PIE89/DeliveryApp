import PizzaProduct from "@/assets/img/icons/pizza.svg";
import SushiProduct from "@/assets/img/icons/sushi.svg";
import DrinksProduct from "@/assets/img/icons/drinks.svg";

const useNavbarItemsList = () => {
  const navbarItemsList = [
    {
      path: "/pizzas",
      Icon: PizzaProduct,
      text: "Пиццы",
    },
    {
      path: "/sushi",
      Icon: SushiProduct,
      text: "Суши",
    },
    {
      path: "/drinks",
      Icon: DrinksProduct,
      text: "Напитки",
    },
  ];

  return navbarItemsList;
};

export { useNavbarItemsList };
