import PropTypes from "prop-types";

import "./index.style.scss";

export const ProgressContent = ({
  percents
}) => (
  <div className="progress-content-container" data-testid="percent-display">
    {percents && (
      <p>{percents}</p>
    )}
  </div>
);

ProgressContent.propTypes = {
  percents: PropTypes.number
};

ProgressContent.defaultProps = {
  percents: null
};

export default ProgressContent;