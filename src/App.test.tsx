import { render } from "@testing-library/react";
import App from "./App";

describe("AppComponent", () => {
  test("AppComponent", () => {
    jest.mock("./components/CoinMarket/CoinMarket.component", () => jest.fn());
    const container = render(<App />);
    expect(container).toBeDefined()
  });
});
