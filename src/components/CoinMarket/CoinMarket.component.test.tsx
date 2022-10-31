import { render, fireEvent } from "@testing-library/react";
import axios from 'axios';
import CoinMarketComponent from "./CoinMarket.component";
import coinData from "../../Mock/CoinDataByID.json";
import CoinMarketData from '../../Mock/CoinMarket.json';
import * as coinAPI from '../../api/CoinMarketAPI';

jest.mock("./CoinMarket.component", () => jest.fn());

describe("CoinMarketComponent", () => {
  test("CoinMarketComponent", () => {
    const container = render(<CoinMarketComponent />);
    expect(container).toBeDefined();
  });
});
