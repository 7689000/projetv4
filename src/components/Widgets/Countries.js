import React , {useState , useEffect} from "react";
import axios from 'axios';
import Card from "./Card";
import "D:/OCRES/WebTech/projetv4/src/Style/Countries.css";


const Countries = () => {
	const [data, setData] = useState([]);
	
	useEffect(() => {
			
		axios
		.get("https://restcountries.com/v2/all?fields=name,population,region,capital,flag")
		.then((res)=>setData(res.data));

	},[data])
	
	return <div className="countries">
	            <ul className="countries-list">
	                 {data.filter((country) =>country.name.includes("France"))
					 .map((country)=> (
                     <Card country={country} key={country.name}/>
		            ))}
		        </ul>
		    </div>
	};
	
	export default Countries;