import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import { Markup } from 'interweave';

function CoinModal(props: any) {
  const { open, handleModalClose, coinData } = props;

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      onOpen={open}
      trigger={<Button>Long Modal</Button>}
    >
      <Modal.Header>Modal Header</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="/images/wireframe/image.png" wrapped />
        <Modal.Description>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.
          </p>
          <div>Name = {coinData.name} </div>
          <div> Symbol = {coinData.symbol} </div>
          <div> Hashing Alogorithm = {coinData.hashing_algorithm} </div>
          <div> Market cap in Euro= {coinData.market_data.market_cap.eur} </div>
          <div> Homepage = {coinData.links.homepage[0]} </div>
          <div> Genesis data = ${coinData.genesis_date} </div>
        {/* //   Description={coinData.description.en} */}
          <Markup content={coinData.description.en} />
          {/* <Image src={coinData.image} /> */}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleModalClose}>
          Proceed <Icon name="shop" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CoinModal;
