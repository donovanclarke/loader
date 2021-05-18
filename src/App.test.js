import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  test("renders App component buttons start and end", () => {
    render(<App />);
    const startButton = screen.getByText("Start");
    const endButton = screen.getByText("End");
    expect(startButton).toBeInTheDocument();
    expect(endButton).toBeInTheDocument();
  });

  test("renders ProgressCircle component", () => {
    render(<App />);
    const loader = screen.getByTitle("loader");
    expect(loader).toBeInTheDocument();
  });
});
