/* eslint-disable react/prop-types */
import Button from "./Button";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

export default function ProductItems({ product, carts, dispatch }) {
  const { id, name, price, category, quantity } = product;
  const exist = carts.some((item) => Number(item.id) === Number(id));

  function increaseCart(id) {
    const item = carts.filter((item) => item.id === id);
    return item[0].quantity++;
  }

  function handleAddtoCart(id) {
    if (exist) return;
    // eslint-disable-next-line no-undef
    const newItem = {
      id,
      name,
      image: product.image.mobile,
      price,
      quantity,
      totalPrice: price * 1,
    };
    dispatch({ type: "addCart", payload: newItem });
  }
  return (
    <li className="col-span-1 sm:w-4/5 md:w-full mx-auto bg-white shadow-rose-100 shadow-sm my-3 rounded-md">
      <div className="card">
        <div className="relative">
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={product.image.desktop}
              alt={name}
              className="hidden lg:block"
            />
            <img
              src={product.image.tablet}
              alt={name}
              className="hidden md:block lg:hidden"
            />
            <img
              src={product.image.mobile}
              alt={name}
              className="block md:hidden"
            />
          </div>
          <div className="absolute right-0 left-0 -bottom-5 w-full flex justify-center">
            {exist ? (
              <div className="flex justify-between items-center bg-Red rounded-3xl px-3 py-2 text-sm shadow-sm text-white w-3/5">
                <span className="rounded-full border p-1 hover:bg-white hover:text-Red ">
                  <RiSubtractFill className="font-bold" />
                </span>
                <p>{quantity}</p>
                <span
                  className="rounded-full border p-1 hover:bg-white hover:text-Red"
                  onClick={()=>increaseCart(id)}
                >
                  <IoMdAdd />
                </span>
              </div>
            ) : (
              <Button
                onclick={() => handleAddtoCart(id)}
                type="border border-Red rounded-3xl px-3 py-2 bg-white text-sm shadow-sm hover:bg-rose-100 transition-all duration-500 ease-in-out hover:shadow-md shadow-inner w-2/3"
              >
                Add to cart
              </Button>
            )}
          </div>
        </div>
        <div className="px-2 py-3 my-3">
          <h6 className=" font-extralight text-xs sm:text-sm text-rose-400">
            {category}
          </h6>
          <h1 className="md:text-lg text-sm font-semibold">{name}</h1>
          <h4 className="md:text-lg text-sm font-semibold text-Red">
            ${price.toFixed(2)}
          </h4>
        </div>
      </div>
    </li>
  );
}
