import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import {
  getSushi,
  getSushiErrors,
  getSushiLoading,
} from "@/redux/sushi/selectors/sushiSelectors";
import { fetchNextSushiPage } from "@/redux/sushi/services/fetchNextSushiPage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const SushiPage = () => {
  const sushi = useSelector(getSushi);
  const error = useSelector(getSushiErrors);
  const loading = useSelector(getSushiLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    dispatch(fetchNextSushiPage());
  }, [dispatch, inView]);

  if (error) {
    return <div>{error}</div>;
  }

  const item = sushi.map((roll) => {
    const prices = roll.pieces.map((el) => el.price);
    const minPrice = Math.min(...prices);

    return (
      <CartItem
        key={roll.id}
        id={roll.id}
        photo={roll.photo}
        name={roll.name}
        product={roll.product}
        ingredients={roll.ingredients}
        price={minPrice}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"Суши"} item={item} />
      {loading && <ProductLayoutSkeleton />}
      {!loading && <div ref={ref}></div>}
    </>
  );
};

export default SushiPage;
