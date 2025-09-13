export default function SectionHeader({ title, spanItem, className = "" }) {
  return (
    <h2 className={`text-text-light font-manrope font-medium  ${className}`}>
      {title} <span className="text-primary">{spanItem}</span>
      {title}
    </h2>
  );
}
