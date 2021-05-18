import React from "react";
import { render, screen } from '@testing-library/react';

import { ProgressChart, calculateShapes } from "./index";

describe("<ProgressChart />", () => {
  it("should render without crashing", () => {
    render(<ProgressChart />);
    const loader = screen.getByTitle("loader");
    expect(loader).toBeInTheDocument();
  });

  // other tests to consider are no loading state.
  // if a percentage is passed is the calculation correct.
  describe("calculations", () => {
    it("should calculate normalized radius and circumference", () => {
      const nr = 100 - 8;
      const { normalizedRadius, circumference } = calculateShapes();
      
      expect(normalizedRadius).toEqual(nr);
      expect(circumference).toEqual(nr * 2 * Math.PI);
    });
  });
});