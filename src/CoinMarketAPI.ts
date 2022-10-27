import axios from "axios";


export const getCoinMarketList = async () =>{
   const API_ENDPOINT = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

   const res = await axios.get(API_ENDPOINT).then( res => res.data);
   return res;
}

export const getCoinDataById = async (id: string) =>{
    const API_ENDPOINT = `https://api.coingecko.com/api/v3/coins/${id}?localization=false`;
    const res = await axios.get(API_ENDPOINT).then(res => res.data);
    return res;
}