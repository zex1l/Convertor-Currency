import { useState } from 'react';
import style from './DropWornMenu.module.scss'

interface IDropDownProp {
    currencys: string[]
    setCurrency: (currency:string) => void
    currentCurrency: string
}

const DropDownMenu  = ({currencys, setCurrency, currentCurrency} : IDropDownProp) => {
    const [isActiveDrop, setIsActiveDrop] = useState<boolean>(false)
    const title = currentCurrency ? currentCurrency : 'Укажите валюту'
    
    
    return (
        <div className={style.dropdown}>
            <button  onClick={() => setIsActiveDrop(value => !value)}>{title}</button>
            <div className={`${style.dropdown_content} ${isActiveDrop ? style.active : style.disable}`}>
                {currencys.map((item) => (
                    <p onClick={() => {setCurrency(item); setIsActiveDrop(false)}}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default DropDownMenu;