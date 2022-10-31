import "./App.css";
import { Icon, Header, Grid } from "semantic-ui-react";
import CoinMarket from "./components/CoinMarket/CoinMarket.component";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Grid verticalAlign="middle" style={{ height: "6rem" }}>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header className="header" as="h1">
                Coin Market
                <Icon name="bitcoin" style={{color:"#817f3d"}}/>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="container">
        <CoinMarket />
      </div>
    </div>
  );
}

export default App;
