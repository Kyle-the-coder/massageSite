import "./button.css";

export function Button({ buttonName, size, margin, padding }) {
  return (
    /* From Uiverse.io by Codecite */
    <button
      className="btn"
      style={{ fontSize: size, margin: margin, padding: padding }}
    >
      {buttonName}
    </button>
  );
}
