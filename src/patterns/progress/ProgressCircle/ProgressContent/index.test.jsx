import React from "react";
import { render, screen } from "@testing-library/react";

import { ProgressContent } from "./index";

const baseProps = { percents: 75 };

describe("<ProgressContent />", () => {
  it("should render without crashing and display content", () => {
    render(<ProgressContent {...baseProps} />);
    const content = screen.getByText("75");
    expect(content).toBeInTheDocument();
  })
})
