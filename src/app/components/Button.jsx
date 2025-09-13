export default function Button({ children, icon, className = "", ...props }) {
  return (
    <button
      className={`text-primary-dark  font-general bg-primary rounded-sm shadow-shadow-button px-8 py-4 inline-flex w-max  gap-2 items-center justify-center cursor-pointer ${className}`}
      {...props}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
