import React from "react";
import { render, screen } from "@testing-library/react";

import { ProgressContent } from "./index";

const baseProps = { percents: 75 };

describe("<ProgressContent />", () => {
  it("should render without crashing and display content", () => {
    render(<ProgressContent {...baseProps} />);
    const content = screen.getByText("75");
    const container = screen.getByTestId("percent-display");
    expect(content).toBeInTheDocument();
    expect(container).not.toBeEmptyDOMElement();
  })

  it("should not render content or p element", () => {
    render(<ProgressContent />);
    const content = screen.getByTestId("percent-display");
    expect(content).toBeEmptyDOMElement();
  })
})
