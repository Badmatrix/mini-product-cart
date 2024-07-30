/* eslint-disable react/prop-types */
import { PiCheckCircle } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";

import Button from "./Button";
import OrderItem from "./OrderItem";

export default function OrderModal({ carts,closeModal,handleConfirmOrder }) {
  const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0) ?? 0;

  return (
    <div className="bg-white rounded-3xl shadow-md  px-7 py-5 w-full  space-y-7">
      <div className="flex justify-between">
        <PiCheckCircle className="text-green-600 text-5xl " />
        <span className="cursor-pointer" onClick={handleConfirmOrder}>
          <MdOutlineClear className="text-2xl hover:text-gray-500 transition-colors duration-200 ease-in-out" />
        </span>
      </div>
      <div>
        <h1 className="text-3xl font-bold capitalize my-2">order confirmed</h1>
        <p>we hope you enjoy your food</p>
      </div>
      <ul className=" space-y-3 bg-rose-100/40 rounded-lg">
        {carts.map((item) => (
          <OrderItem key={item.id} cart={item} />
        ))}
        <li className="flex justify-between mx-3  py-3 capitalize">
          <h2 className="md:text-lg text-sm">order total</h2>
          <p className="font-bold md:text-2xl text-lg">
            ${totalPrice.toFixed(2)}
          </p>
        </li>
      </ul>
      <div className="flex justify-center">
        <Button
          onclick={closeModal}
          type="bg-Red font-semibold capitalize px-2 py-3 rounded-3xl w-full mx-5 text-rose-100"
        >
          start new order
        </Button>
      </div>
    </div>
  );
}
