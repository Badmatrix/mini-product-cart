
export default function EmptyCart() {
  return (
    <div className=" space-y-4  h-fit px-5 py-7  rounded-2xl sticky top-0 bg-white">
      <h1 className=" text-Red text-lg md:text-xl capitalize font-semibold px-3 py-2 border-b">
        your cart (0)
      </h1>
      <div className="flex justify-center">
        <img src="/images/illustration-empty-cart.svg" alt="empty cart" />
      </div>
      <p className="text-base text-rose-500 text-center first-letter:capitalize">
        your added item will appear here
      </p>
    </div>
  );
}
