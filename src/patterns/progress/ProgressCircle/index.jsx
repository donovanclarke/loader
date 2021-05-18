import PropTypes from "prop-types";

import ProgressChart from "./ProgressChart";
import ProgressContent from "./ProgressContent";

import "./index.style.scss";

export const ProgressCircle = ({
    percentage,
    loading
  }) => (
    <div className="progress-circle-container">
      <ProgressContent percents={percentage} />
      <ProgressChart percents={percentage} loading={loading} />
    </div>
  );
  
  ProgressCircle.propTypes = {
    percentage: PropTypes.number
  };
  
  ProgressCircle.defaultProps = {
    percentage: null
  };
  
  export default ProgressCircle;