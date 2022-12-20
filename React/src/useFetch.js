import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoad] = useState(true);
    const [msg, setMsg] = useState("Could not fetch the data!");
    const [er, setEr] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {  //Check if the response object has the data or not.
                        // setEr(true)
                        throw Error("lmao")
                    }
                    return res.json()
                })
                .then(dataa => {
                    setData(dataa);
                    setLoad(false);
                    setEr(false);
                })
                .catch((error) => { //.catch() is used only for connection error btw computer and server, but if the request reaches the server .catch() is unable to catch it.
                    // console.log(error.message)
                    if(error.name === 'AbortError'){
                        console.log('Fetch Aborted!');
                    } else{
                        setEr(true)
                        setLoad(false)
                    }
                })
        }, 0)

        return ()=> abortCont.abort();
    }, [url])

    return {data , isLoading , msg , er}
}

export default useFetch;