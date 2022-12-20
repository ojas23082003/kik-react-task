import { useState, useEffect } from "react";

const useFetchNew = (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    
    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw Error("Could not fetch the data!");
                }

                return res.json();
            })
            .then(data =>{
                setData(data);
                setLoading(false);
                console.log(data);
                setError(true);
            })
            .catch(error =>{
                setLoading(false);
                setError(true);
                setMsg("Failed to fetch the data!");
            })

    }, [url])

    return {data, isLoading, msg, error}
}

export default useFetchNew;