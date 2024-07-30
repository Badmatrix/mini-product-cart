/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

export default function CartList({ cart,handleDeleteCart}) {
  const { id, name,quantity,totalPrice } = cart;
 
  return (
    <li className="flex justify-between items-center py-2 border-b text-rose-900">
      <div>
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="flex gap-3 text-rose-500">
          <span>{quantity}x</span> <span>${totalPrice}</span>
        </p>
      </div>
      <span
        className=" cursor-pointer text-rose-500"
        title="delete cart"
        onClick={() => handleDeleteCart(id)}
      >
        <MdDeleteForever className="text-2xl text-Red" />
      </span>
    </li>
  );
}
