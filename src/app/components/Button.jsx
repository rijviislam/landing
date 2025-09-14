import * as motion from "motion/react-client";
export default function Button({ children, icon, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.5 }}
      className={`text-primary-dark  font-general bg-primary rounded-sm shadow-shadow-button px-8 py-4 inline-flex w-max  gap-2 items-center justify-center cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  );
}
