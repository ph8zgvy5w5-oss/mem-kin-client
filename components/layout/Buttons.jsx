import { Link } from "react-router-dom"

function Button({ children, onClick, type = "button", variant = "primary", to}) {

  const styles = {
    primary:
      "bg-red-200 text-white hover:bg-orange-100",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  const className = `px-4 py-2 rounded-lg font-medium transition ${styles[variant]}`;

  if (to){
    return (
      <Link to={to} onClick={onClick} className={className}>{children}</Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;