import PropTypes from "prop-types";

import "./index.style.scss";

//these are helper functions, they could live in a util folder for a refactor.
export const calculateShapes = () => {
  const radius = 100;
  const stroke = 10;
  const normalizedRadius = radius - 8;

  return {
    radius,
    stroke,
    normalizedRadius,
    circumference: normalizedRadius * 2 * Math.PI
  }
}

export const calculateOffset = (circumference, percents) => ({
  progressOffset: circumference - (percents / 100) * circumference
});


export const ProgressChart = ({
  loading,
  percents
}) => {
  const { radius, normalizedRadius, circumference } = calculateShapes();
  const { progressOffset } = calculateOffset(circumference, percents);

  return (
    <svg className="spinner" title="loader">
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        strokeWidth={10}
        strokeDasharray={`${circumference} ${circumference}`}
        className="progress"
      />
      <circle
      cx={radius}
      cy={radius}
      r={normalizedRadius}
      strokeWidth={10}
      style={{
        strokeDashoffset: progressOffset,
        strokeDasharray: `${circumference} ${circumference}`,
        animationPlayState: `${loading ? ("running") : ("paused")}`
      }}
      className={"progress-animation"}
    />
    </svg>
  );
};

ProgressChart.propTypes = {
  loading: PropTypes.bool,
  percents: PropTypes.number
};

ProgressChart.defaultProps = {
  loading: true,
  percents: null
};

export default ProgressChart;