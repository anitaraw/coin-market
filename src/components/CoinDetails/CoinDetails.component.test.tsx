import { render, fireEvent } from "@testing-library/react";
import CoinDetailsComponent from "./CoinDetails.component";
import coinData from "../../Mock/CoinDataByID.json";

describe("CoinDetailsComponent", () => {
  test("CoinDetailsComponent", () => {
    const props = {
      open: true,
      handleModalClose: jest.fn(),
      coinData: coinData,
    };

    const container = render(<CoinDetailsComponent {...props} />);
    expect(container).toBeDefined();
  });
});
