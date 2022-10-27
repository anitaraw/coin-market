import React from "react";
import { Card, Image } from "semantic-ui-react";
import CoinModal from "./CoinModal";
import { getCoinDataById } from "./CoinMarketAPI";

const CoinMarketCard = (props: any) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [coinData, setCoinData] = React.useState<any>();
  const { coinMarketList } = props;

  const getCoinData = async (coin: any) => {
    setModalOpen(true);
    const res = await getCoinDataById(coin?.id);
    setCoinData(res);
    const value = `
    Name = ${res.name}
    Symbol = ${res.symbol}
    Hashing Alogorithm = ${res.hashing_algorithm}
    Description=${res.description.en}
    Market cap in Euro= ${res.market_data.market_cap.eur}
    Homepage = ${res.links.homepage[0]}
    Genesis data = ${res.genesis_date}
    `;
    console.log(value);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setCoinData(null);
  };

  return (
    <>
      <Card.Group>
        {coinMarketList &&
          coinMarketList.map((item: any) => {
            return (
              <Card>
                <div
                  style={{
                    height: "20rem",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={() => getCoinData(item)}
                >
                  <Image
                    src={item.image}
                    fluid
                    size="big"
                    verticalAlign="middle"
                    style={{ width: "auto", height: "100%" }}
                    ui={true}
                  />
                </div>
                <Card.Content>
                  <Card.Header>Name: {item.name}</Card.Header>
                  <Card.Description>Symbol: {item.symbol}</Card.Description>
                  <Card.Description>
                    Current Price: {item.current_price}
                  </Card.Description>
                  <Card.Description>
                    Hight 24 Hour Price: {item.high_24h}
                  </Card.Description>
                  <Card.Description>
                    Low 24 Hour Price: {item.low_24h}
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
      </Card.Group>
      {modalOpen && coinData && (
        <CoinModal
          open={modalOpen}
          coinData={coinData}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default CoinMarketCard;
