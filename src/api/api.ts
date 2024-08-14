import axios from 'axios';

export const options = {
  
  headers: {
    'x-rapidapi-key': '16a0768e11msh4ff883b744d5c9ap1dfa93jsn162358fb5542',
    'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
  }
};

export const instance = axios.create(options);

export const getCurrencys = async() => {
    const url =  'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest'
    const responce = await instance.get(url, {
        params: {
            base: 'USD'
          },
    })

    return responce.data.rates
}

export const convertCurrency = async(value:string, currencyFrom:string, currencyTo:string) => {
  const url =  'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert'
    const responce = await instance.get(url, {
        params: {
            from: currencyFrom,
            to: currencyTo,
            amount: value
          },
    })

    return responce
}

export const symbolCurrency = async() => {
  const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols'
  const responce = await instance.get(url)

  return responce
}