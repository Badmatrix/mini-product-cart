/* eslint-disable react/prop-types */
import Button from "./Button";
import CartList from "./CartList";
import { MdOutlineClear } from "react-icons/md";

export default function CartModal({ carts, dispatch, handleConfirmOrder }) {
  // console.log(carts);
  const nums = carts?.length;
  const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0) ?? 0;
  
  function handleDeleteCart(id) {
    const del = carts.filter((item) => item.id !== id);
    dispatch({ type: "deleteCart", payload: del });
  }
  function handleClearCart() {
    dispatch({ type: "clearCart" });
  }
  return (
    <div className=" lg:col-span-1 sm:w-4/5 lg:w-full mx-auto bg-white rounded-lg h-fit px-3 py-5 space-y-5 lg:mx-0 sticky top-0">
      <div className=" flex justify-between items-center">
        <h1 className=" text-Red text-lg md:text-xl capitalize font-semibold px-3 py-2 border-b">
          your cart {nums}
        </h1>
        <span
          onClick={handleClearCart}
          className="cursor-pointer text-Red rounded-full hover:bg-Red transition-colors duration-200 ease-in-out"
          title="clear cart"
        >
          <MdOutlineClear className="text-2xl hover:text-white transition-colors duration-200 ease-in-out" />
        </span>
      </div>

      <ul className=" space-y-5 px-3">
        {carts?.map((cart) => (
          <CartList
            key={cart.id}
            cart={cart}
            handleDeleteCart={handleDeleteCart}
            dispatch={dispatch}
          />
        ))}
      </ul>
      <div className="flex justify-between mx-3  py-3 capitalize">
        <h2 className="md:text-lg text-sm">order total</h2>
        <p className="font-bold md:text-2xl text-lg">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-center mx-5 mt-5 ">
        <Button
          type="bg-Red py-3 px-5 capitalize text-rose-100 rounded-3xl tracking-wide font-semibold w-full hover:bg-orange-800 transition-all duration-300 text-xs md:text-lg"
          onclick={handleConfirmOrder}
        >
          confirm order
        </Button>
      </div>
    </div>
  );
}
