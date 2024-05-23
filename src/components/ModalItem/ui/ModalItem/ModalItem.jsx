import { productsName } from "@/const/const";
import {
  getProductItem,
  getProductItemPrice,
} from "@/redux/productItem/selectors/productItemSelectors";
import { Modal } from "@/ui/Modal";
import { useSelector } from "react-redux";
import { ModalItemPizza } from "../ModalItemPizza/ModalItemPizza";
import { ModalItemSushi } from "../ModalItemSushi/ModalItemSushi";
import { ModalItemDrinks } from "../ModalItemDrinks/ModalItemDrinks";

const ModalItem = (props) => {
  const { isOpen, setIsOpen } = props;

  const product = useSelector(getProductItem);
  // const loading = useSelector(getProductItemLoading);
  const price = useSelector(getProductItemPrice);

  const productOptions = () => {
    const props = {
      isOpen: isOpen,
      product: product,
      price: price,
    };

    switch (product.product) {
      case productsName.PIZZA:
        return <ModalItemPizza {...props} />;

      case productsName.SUSHI:
        return <ModalItemSushi {...props} />;

      case productsName.DRINKS:
        return <ModalItemDrinks {...props} />;

      default:
        return null;
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width={1070}
      height={680}
      border={25}
    >
      {productOptions()}
    </Modal>
  );
};

export { ModalItem };
