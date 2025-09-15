export default function SectionHeader({
  title,
  spanItem,
  title2,
  className = "",
}) {
  return (
    <h2 className={` font-manrope font-medium ${className}`}>
      {title} <span className="text-primary">{spanItem}</span>
      {title2 && <> {title2}</>}
    </h2>
  );
}
