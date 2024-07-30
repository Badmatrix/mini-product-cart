/* eslint-disable react/prop-types */
import ProductItems from "./ProductItems";
import Loader from "./Loader";
import Error from "./Error";

export default function Products({ isLoading, products, error,carts,dispatch}) {
  if (isLoading) return <Loader />;
  return (
    <div className=" col-span-2 my-7 w-full">
      {!isLoading && error ? (
        <Error error={error} />
      ) : (
        <div className="space-y-5 mx-5">
          <h1 className=" font-bold text-3xl capitalize">desserts</h1>
          <ul className=" md:grid sm:grid-cols-2 md:grid-cols-3 gap-10 space-y-7 md:space-y-0">
            {products.map((item) => (
              <ProductItems
                key={item.id}
                product={item}
                carts={carts}
                dispatch={dispatch}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
