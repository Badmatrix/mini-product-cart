/* eslint-disable react/prop-types */

export default function OrderItem({ cart }) {
  const { image, name, price, totalPrice, quantity } = cart;
  return (
    <li className="flex justify-between items-center  border-b border-rose-300/10 py-2 px-3">
      <div className=" flex items-center gap-3">
        <div className="w-14 h-12 aspect-square flex justify-center align-middle">
          <img src={image} alt={name} />
        </div>
        <div>
          <div>{name}</div>
          <div className="text-sm">
            <div className="space-x-3">
              
              <span className="text-Red font-semibold">{quantity}x</span>
            <span>@{price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-rose-900 font-semibold">${totalPrice.toFixed(2)}</div>
    </li>
  );
}
