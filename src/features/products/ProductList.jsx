import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import { addToCart } from "../cart/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {items.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} className="h-32 mx-auto"/>
          <h3 className="text-md font-semibold">{product.title}</h3>
          <p>${product.price}</p>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-700 active:scale-95 transition duration-150 ease-in-out" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
