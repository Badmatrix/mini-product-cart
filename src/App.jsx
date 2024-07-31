import { useReducer, useState } from "react";
import CartModal from "./components/CartModal";
import Products from "./components/Products";
import { useEffect } from "react";
import EmptyCart from "./components/EmptyCart";
import OrderModal from "./components/OrderModal";

function App() {
  const initialState = {
    products: [],
    carts: [],
    isLoading: false,
    error: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "getProducts":
        return { ...state, products: action.payload };
      case "error":
        return { ...state, error: action.payload };
      case "loading":
        return { ...state, isLoading: action.payload };
      case "addCart":
        return { ...state, carts: [...state.carts, action.payload] };
      case "inc/cart":
        return { ...state, carts: [] };
      case "deleteCart":
        return { ...state, carts: action.payload };
      case "clearCart":
        return { ...state, carts: [] };
      default:
        throw new Error("unknown action " + action.type);
    }
  }

  const [{ products, isLoading, error, carts }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(function () {
    async function getData() {
      try {
        dispatch({ type: "loading", payload: true });
        const res = await fetch(
          "https://run.mocky.io/v3/80084339-75b1-4fce-8606-f0af6b7706ff"
        );
        const data = await res.json();
        dispatch({ type: "getProducts", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    }
    getData();
  }, []);

  const [openModal, setOpenModal] = useState(false)
  function handleConfirmOrder() {
    setOpenModal(modal=>!modal)
  }
  function closeModal() {
    // console.log('close')
    setOpenModal(false);
    dispatch({type:'clearCart'})
    
 }

  return (
    <div className={openModal ? 'fixed ': "relative"}>
      <div className="">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10 lg:mx-10 ">
          <Products
            products={products}
            isLoading={isLoading}
            error={error}
            carts={carts}
            dispatch={dispatch}
          />
          {carts.length > 0 ? (
            <CartModal
              products={products}
              carts={carts}
              dispatch={dispatch}
              handleConfirmOrder={handleConfirmOrder}
            />
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
      {openModal && (
        <div className="w-full h-full bg-neutral-700/30 backdrop-blur-sm absolute top-0">
          <div className="h-20 left-0 right-0 items-center w-full md:w-4/5 lg:w-[50%] mx-auto mt-7 lg:mt-14">
            <OrderModal
              carts={carts}
              closeModal={closeModal}
              handleConfirmOrder={handleConfirmOrder}
            />
          </div>
          ;
        </div>
      )}
    </div>
  );
}

export default App;
