import { useEffect, useState } from "react";
import ProductItems from "./components/ProductItems";
import Loader from "./components/Loader";
import Error from "./components/Error";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setIsLoading(true);
        setError(error.message);

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  if (isLoading) return <Loader />;
  return (
    <>
      {!isLoading && error ? (
        <Error error={error} />
      ) : (
        <div>
          <h1>desserts</h1>
          <ul className=" grid grid-cols-3">
            {products.map((item) => (
              <ProductItems key={item.id} products={item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
