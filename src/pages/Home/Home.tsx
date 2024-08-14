import { useEffect, useState } from 'react';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import style from './Home.module.scss'
import { convertCurrency, symbolCurrency } from '../../api/api';

const Home = () => {

    const [currencyFrom, setCurrencyFrom] = useState<string>('')
    const [currencyTo, setCurrencyTo] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [resultConvert, setResultConvert] = useState()
    const [symbol, setSymbol] = useState<string[]>([])

    useEffect(() => {
        if(currencyFrom && currencyTo) {
            convertCurrency(value, currencyFrom, currencyTo)
                .then((responce:any) => setResultConvert(responce.data.result))
        }
        
    }, [value, currencyFrom, currencyTo])

    useEffect(() => {
        symbolCurrency()
            .then(responce => {
                const arraySymbol :string[] = []
                for(const key in responce.data.symbols) {
                    arraySymbol.push(key)
                }
                setSymbol(arraySymbol.sort())
            })
    }, [])
    return (
        <main className={style.main}>
            <h1 className={style.main__header}>Перевод валюты</h1>

            <div className={style.main__currencys}>
                <DropDownMenu currencys={symbol} setCurrency={setCurrencyFrom} currentCurrency={currencyFrom}/>
                <div>➡️</div>
                <DropDownMenu currencys={symbol} setCurrency={setCurrencyTo} currentCurrency={currencyTo}/>
            </div>
            <form action="submit" className={style.main__form_values}>
                <input type="text" 
                value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <input value={resultConvert} disabled/>
            </form>
            <div className={style.currency__code}>
                <a href='https://www.iban.ru/currency-codes'>Не знаете коды валют?</a>
            </div>
           
        </main>
    );
};

export default Home;