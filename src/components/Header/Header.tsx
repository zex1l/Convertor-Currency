import Container from '../Container/Container';
import style from './Header.module.scss'
import { useEffect, useState } from 'react';
import { getCurrencys } from '../../api/api';


interface IData {
    code: string
    value: number
}


const Header = () => {
    const [data, setData] = useState<IData []>([])
    const [loading, setIsLoading] = useState<boolean>(false)


    useEffect(() => {
        setIsLoading(true)
        
        try {
            getCurrencys().then((responce:any) => {
                const arr = []
                for(const key in responce) {
                    if(key === 'RUB' || key === 'EUR') {
                        arr.push({
                            code: key,
                            value: responce[key]
                        })
                    }
                }
                setData(arr)
                
            })
            
        } catch (error) {
            console.log(error)
        }

        setIsLoading(false)
    }, [])

    return (
        <header className={style.header}>
            <Container>
                <div className={style.header__inner}>
                    <div className={style.header__logo}>Курс обмена валют</div>
                    <nav className={style.header__nav}>
                        <ul className={style.header__nav_list}>
                            <li className={style.header__nav_item}><a >Git Hub</a></li>
                            <li className={style.header__nav_item}><a href='https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates/playground/apiendpoint_cba2fdf5-4719-4883-ab4d-b32f6c45e48f'>Api</a></li>
                        </ul>
                    </nav>
                    <div className={style.header__valutes}>
                        <ul className={style.header__valutes_list}>
                            {!loading ? 
                                data.map((item, index) => (
                                    <li className={style.header__valutes_item} key={index}>
                                        <span>{item.code}</span>
                                        <span>{item.value.toFixed(2)}</span>
                                    </li>
                                ))
                                :
                                <div>...loading</div>
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;