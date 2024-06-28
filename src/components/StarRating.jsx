import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "8px",
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 18,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1", // Corrected lineHeight typo
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            starNo={i + 1}
            setRating={setRating}
            rating={rating}
            tempRating={tempRating}
            setTempRating={setTempRating}
            color={color}
            size={size} // Passing size to Star component
            onSetRating={onSetRating}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};
export default StarRating;

const Star = ({
  rating,
  starNo,
  setRating,
  tempRating,
  setTempRating,
  color,
  size,
  onSetRating,
}) => {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  const onClick = () => {
    setRating(starNo);
    onSetRating(starNo);
  };

  const onHoverIn = () => {
    setTempRating(starNo);
  };

  const onHoverOut = () => {
    setTempRating(0);
  };

  return (
    <span
      role="button"
      style={starStyle}
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <svg
        fill={
          tempRating >= starNo || (!tempRating && rating >= starNo)
            ? color
            : "#fff"
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        stroke={color}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
};
