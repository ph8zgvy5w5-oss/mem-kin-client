function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-orange-100
        rounded-2xl
        border border-slate-400
        shadow-sm
        p-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;