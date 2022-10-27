import { useEffect, useState } from "react";
import { getCoinMarketList, getCoinDataById } from './CoinMarketAPI';
import CoinMarketCard from './CoinMarketCard';

const CoinMarket = () =>{
    const [coinMarketList, setCoinMarketList] = useState([]);

    const fetchCoinMarketList = async () =>{
        const response = await getCoinMarketList();
        setCoinMarketList(response);
    }

    useEffect(() =>{
        fetchCoinMarketList();
    }, []);

    const getCoinData = async (coin: any) =>{
        const res = await getCoinDataById(coin?.id);
        
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
    }

    return (<>
    <CoinMarketCard coinMarketList={coinMarketList}/>
        {/* {
            coinMarketList && coinMarketList.length > 0 &&
            coinMarketList.map((item: any) => {
                return <p onClick={() => getCoinData(item)}>
                    Image: {item.image} , Name: {item.name}, Symbol: {item.symbol}, Current Price: {item.current_price}, 
                    High 24 hour price: {item.high_24h} , Low 24 hour price: {item.low_24h}
                </p>
            })
        } */}
    </>)
};


export default CoinMarket;

