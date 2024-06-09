const Button = ({ className, type, onClick, disabled, children }) => {
  return (
    <>
      <button
        className={`p-1 rounded-full  ${disabled ? "bg-gray-700" : "from-gr-first via-gr-second to-gr-third bg-gradient-to-r"} ${className}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="block px-5 py-2 text-sm rounded-full bg-background hover:bg-transparent transition uppercase">
          {children}
        </span>
      </button>
    </>
  );
};

export default Button;
