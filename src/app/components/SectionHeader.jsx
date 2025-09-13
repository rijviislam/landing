export default function SectionHeader({
  title,
  spanItem,
  title2,
  className = "",
}) {
  return (
    <h2 className={`text-text-light font-manrope font-medium ${className}`}>
      {title} <span className="text-primary">{spanItem}</span>
      {title2 && <> {title2}</>}
    </h2>
  );
}
