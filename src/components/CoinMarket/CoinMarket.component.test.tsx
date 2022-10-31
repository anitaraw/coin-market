import { render, fireEvent } from "@testing-library/react";
import CoinMarketComponent from "./CoinMarket.component";
import coinData from "../../Mock/CoinDataByID.json";
import CoinMarketData from '../../Mock/CoinMarket.json';

describe("CoinMarketComponent", () => {
  test("CoinMarketComponent", () => {
    
    jest.mock('../../api/CoinMarketAPI', () =>({
        getCoinMarketList: jest.fn().mockReturnValue(CoinMarketData),
        getCoinDataById: jest.fn().mockReturnValue(coinData)
    }));

    const container = render(<CoinMarketComponent />);
    expect(container).toBeDefined();
  });
});
