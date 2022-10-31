import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./components/CoinMarket/CoinMarket.component", () => jest.fn());

describe("AppComponent", () => {
  test("AppComponent", () => {
    
    const container = render(<App />);
    expect(container).toBeDefined()
  });
});
