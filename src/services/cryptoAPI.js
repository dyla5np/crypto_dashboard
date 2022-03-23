
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'b1f6aadac5msh58e02c167c56e12p1f065bjsn8dd8eb134b60'
// }

// const baseURL = 'https://coinranking1.p.rapidapi.com/coins';

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({ baseURL }),
//     endpoints: (builder) => ({
//         getCryptos: builder.query({
//             query: () => createRequest('/coins')
//         })
//     })
// });

// export const {
//     useGetCryptosQuery,
// } = cryptoApi;


var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'b1f6aadac5msh58e02c167c56e12p1f065bjsn8dd8eb134b60'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});