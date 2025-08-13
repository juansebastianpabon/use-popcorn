const containerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStars = {
  display: "flex",
  gap: "4px",
};
export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyles}>
      <div style={starContainerStars}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}
