import React from 'react';
import Blog from './Blog';
// import { useState, useEffect } from 'react';
import useFetch from './useFetch';

function App() {
  //The code below is a state, by using "setBlog" you can change the state at any point of time.
  // const [blog, setBlog] = useState(null)

  // const [blog, setBlog] = useState(null)
  // const [isLoading, setLoad] = useState(true);
  // const [msg, setMsg] = useState("Could not fetch the data!");
  // const [er, setEr] = useState(null);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     fetch('http://localhost:8000/blogs')
  //       .then(res=>{
  //         if(!res.ok){  //Check if the response object has the data or not.
  //           // setEr(true)
  //           throw Error("lmao")
  //         }
  //         return res.json()
  //       })
  //       .then(data=>{
  //         setBlog(data);
  //         setLoad(false);
  //         setEr(false);
  //       })
  //       .catch((error)=>{ //.catch() is used only for connection error btw computer and server, but if the request reaches the server .catch() is unable to catch it.
  //         // console.log(error.message)
  //         setEr(true)
  //         setLoad(false)
  //       })
  //   }, 1000)
  // }, [])

  const {data , isLoading, msg, er} = useFetch('http://localhost:8000/blogs');

  return (<>
    { er && <h1>{ msg }</h1>}
    { isLoading && <h1>Loading....</h1>}
    { data && <Blog blogs={data}/>}
  </>);
}

export default App;
