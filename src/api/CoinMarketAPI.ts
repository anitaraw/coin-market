import axios from "axios";

const API_URL = 'https://api.coingecko.com/api/v3'


export const getCoinMarketList = async (pageNumber: Number) =>{
   const API_ENDPOINT = `${API_URL}/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false`;

   return await axios.get(API_ENDPOINT).then( res => {
    if(res.status === 200){
       return res.data;
    }
    return [];
   }).catch((err) => console.log(err));
}

export const getCoinDataById = async (id: string) =>{
    const API_ENDPOINT = `${API_URL}/coins/${id}?localization=false`;
    const res = await axios.get(API_ENDPOINT).then(res => res.data);
    return res;
}