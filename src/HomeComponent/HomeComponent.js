import axios from 'axios';
import { useEffect, useState } from "react";


export const HomeComponent = () =>{
    const api_url = "http://localhost:8080/api/v1/";
    const [apiData,setApiData] = useState('');
    const [flag,setFlag] = useState(0);
    useEffect(()=>{
        ApiCall();
    },[])
    const clickHandler=()=>{
        setFlag(1);
    }
    const ApiCall =() =>{
        axios.get(api_url+"dailyworkout").then((res)=>{
            setApiData(res.data);
        }).catch((e)=>{
            console.log(e);
        })
    }
    return(
        <div>   
            <button onClick={clickHandler}>Click for Cricket Coach Suggestion</button>
            <h1> {(apiData && flag===1)?apiData:''}</h1>
        </div>
    )
}