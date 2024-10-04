import "./button.css";

export function Button({ buttonName, size }) {
  return (
    /* From Uiverse.io by Codecite */
    <button className="btn" style={{ fontSize: size }}>
      {buttonName}
    </button>
  );
}
