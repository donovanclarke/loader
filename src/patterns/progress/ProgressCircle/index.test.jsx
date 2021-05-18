import React from "react";
import { render, screen } from '@testing-library/react';

import { ProgressCircle } from "./index";

const baseProps = { loading: false, percentage: 20 }
describe("<ProgressCircle />", () => {
  it("should render without crashing", () => {
    render(<ProgressCircle {...baseProps} />);

    const content = screen.getByTestId("percent-display");
    const loader = screen.getByTitle("loader");
    expect(loader).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  })
})