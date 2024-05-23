import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ModalItemDrinks = (props) => {
  const { isOpen, product, price } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      dispatch(productActions.setClear());
    }
  }, [dispatch, isOpen, product]);

  useEffect(() => {
    if (productsName.DRINKS === product.product && isOpen) {
      dispatch(productActions.setPrice(product.price));
    }
  }, [dispatch, isOpen, product]);

  const newParams = {
    id: product.id,
    product: product.product,
    name: product.name,
    photo: product.photo,
    price: price,
  };

  return <ModalItemLayout params={newParams} />;
};

export { ModalItemDrinks };
