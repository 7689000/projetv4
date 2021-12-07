import React , {useState , useEffect} from "react";
import axios from 'axios';
import Doge from "./Doge";
import "D:/OCRES/WebTech/projetv4/src/Style/Crypto.css";


const Crypto = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
	
	useEffect(() => {
		
		axios
        .get('https://api2.binance.com/api/v3/ticker/24hr')
        .then((res)=>setData(res.data));
        setLoading(false);
		
	},[])

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }
    
    return <div className="weather">
            <ul className="countries-list">
	               {data.filter((currency)=>currency.symbol.includes("DOGEBTC"))
                   .map((currency)=> (
                    <Doge currency = {currency} key ={currency.symbol}/>
                   ))}
		        </ul>
            </div>
};
export default Crypto;