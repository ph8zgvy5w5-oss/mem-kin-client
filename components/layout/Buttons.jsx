import { Link } from "react-router-dom"

function Button({ children, onClick, type = "button", variant = "primary", disabled = false, to}) {

  const styles = {
    primary:
      "bg-red-200 text-white hover:bg-orange-100",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger:
      "bg-red-400 text-taupe-400 hover:bg-red-600",
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
      disabled={disabled}
      className={`
        px-4 py-2 
        rounded-lg 
        font-medium 
        transition-all 
        duration-200
        ${styles[variant]}
        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}

export default Button;