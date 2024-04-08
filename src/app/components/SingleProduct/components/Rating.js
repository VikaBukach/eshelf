const Rating = ({ value, setValue, size = 50, maxRatingCount = 5 }) => {
  const getStar = (isFilled) => (
    <svg
      style={{
        width: size,
        height: size,
      }}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 1.33301L10.0602 5.50634L14.6668 6.17968L11.3335 9.42634L12.1202 14.013L8.00016 11.8463L3.88016 14.013L4.66683 9.42634L1.3335 6.17968L5.94016 5.50634L8.00016 1.33301Z"
        fill={isFilled ? "#FFAF12" : "#C7C9CB"}
        stroke={isFilled ? "#FFAF12" : "#C7C9CB"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const buttons = [];

  for (let i = 1; i <= maxRatingCount; i++) {
    buttons.push({
      value: i,
    });
  }

  return buttons.map((b, idx) => (
    <button
      key={idx}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setValue(b.value);
      }}
    >
      {getStar(idx < value)}
    </button>
  ));
};

export default Rating;
