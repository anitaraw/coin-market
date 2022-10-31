import { Button, Image, Modal } from "semantic-ui-react";
import { Markup } from 'interweave';
import './CoinDetails.css';

function CoinDetailsComponent(props: any) {
  const { open, handleModalClose, coinData } = props;

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      trigger={<Button>Long Modal</Button>}
    >
      <Modal.Header>COIN - {coinData.id.toUpperCase()} </Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={coinData.image.large} wrapped />
        <Modal.Description>
          <div><span className="title">Name</span>: {coinData.name} </div>
          <div><span className="title">Symbol</span>: {coinData.symbol} </div>
          <div><span className="title">Hashing Alogorithm</span>: {coinData.hashing_algorithm} </div>
          <div><span className="title">Market cap in Euro</span>: {coinData.market_data.market_cap.eur} </div>
          <div><span className="title">Homepage</span>: <a href={coinData.links.homepage[0]}>{coinData.links.homepage[0]}</a></div>
          <div><span className="title">Genesis data</span>: ${coinData.genesis_date} </div>
          <div style={{ textAlign: "justify", paddingRight: '3rem' }}><span className="title">Description</span>: <Markup content={coinData.description.en} /></div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleModalClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CoinDetailsComponent;
