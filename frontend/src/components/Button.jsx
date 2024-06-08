const Button = ({ className, type, onClick, disabled, children }) => {
  return (
    <>
      <button
        className={`p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r ${className}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="block px-5 py-2 text-sm rounded-full bg-[#242424] hover:bg-transparent transition">
          {children}
        </span>
      </button>
    </>
  );
};

export default Button;
