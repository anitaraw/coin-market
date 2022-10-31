import { useEffect, useState } from "react";
import { Image, Table, Button, Icon, Label } from "semantic-ui-react";
import { getCoinMarketList, getCoinDataById } from "../../api/CoinMarketAPI";

import CoinDetailsComponent from "../CoinDetails/CoinDetails.component";
import { formatCurrencyToEuro } from "../../utility/util";

const CoinMarketComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [coinData, setCoinData] = useState<any>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isNextDisabled, setNextDisabled] = useState<boolean>(false);
  const [isPreviousDisabled, setPreviousisabled] = useState<boolean>(true);

  const [coinMarketList, setCoinMarketList] = useState([]);

  const fetchCoinMarketList = async () => {
    const response: any =  await getCoinMarketList(pageNumber);
    setCoinMarketList(response);
    if (response.length === 0) {
      setNextDisabled(true);
    }
  };

  useEffect(() => {
    fetchCoinMarketList();
  },[pageNumber]);

  const getCoinData = async (coin: any) => {
    setModalOpen(true);
    const res = await getCoinDataById(coin?.id);
    setCoinData(res);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setCoinData(null);
  };

  const handleNext = () => {
    setPreviousisabled(false);
    setPageNumber(pageNumber + 1);
  };

  const handlePrevious = () => {
    setNextDisabled(false);
    if (pageNumber === 1) {
      setPreviousisabled(true);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <>
      <Table padded="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Image</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Symbol </Table.HeaderCell>
            <Table.HeaderCell>Current Price</Table.HeaderCell>
            <Table.HeaderCell>High 24 Hour Price</Table.HeaderCell>
            <Table.HeaderCell>Low 24 Hour Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {coinMarketList &&
            coinMarketList.map((item: any) => {
              return (
                <Table.Row onClick={() => getCoinData(item)}>
                  <Table.Cell textAlign="center">
                    <Image src={item.image} rounded size="small" />
                  </Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>

                  <Table.Cell>{item.symbol}</Table.Cell>
                  <Table.Cell>
                    {formatCurrencyToEuro(item.current_price)}
                  </Table.Cell>
                  <Table.Cell>{formatCurrencyToEuro(item.high_24h)}</Table.Cell>
                  <Table.Cell>{formatCurrencyToEuro(item.low_24h)}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button.Group icon>
          <Button
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
          >
            <Icon name="arrow circle left" />
          </Button>
          <Label>{pageNumber}</Label>
          <Button onClick={handleNext} disabled={isNextDisabled}>
            <Icon name="arrow circle right" />
          </Button>
        </Button.Group>
      </div>

      {modalOpen && coinData && (
        <CoinDetailsComponent
          open={modalOpen}
          coinData={coinData}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default CoinMarketComponent;
