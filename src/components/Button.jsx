/* eslint-disable react/prop-types */

export default function Button({ onclick, type, children }) {
  return (
    <button className={type} onClick={onclick}>
      {children}
    </button>
  );
}
