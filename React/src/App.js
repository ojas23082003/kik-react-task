import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarNew from './NavbarNew';
import HomeNew from './HomeNew';
import CreateNew from './CreateNew';
import BlogDetailsNew from './BlogDetailsNew';
// import Home from './Home';
// import Create from './Create';
// import Navbar from './Navbar';
// import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';
// import Blog from './Blog';
// import { useState, useEffect } from 'react';
// import useFetch from './useFetch';

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

  // const {data , isLoading, msg, er} = useFetch('http://localhost:8000/blogs');



  //Use of router for displaying multiple pages
  //Route represents a paricular url 
  //Switch surrounds all the routes and makes sure that only one route is shown at a time.
  // return (<>
  //   <Router>
  //     <Navbar />
  //     <div className="content">
  //       <Switch>    
  //         <Route exact path="/">
  //           <Home />
  //         </Route>

  //         <Route exact path="/create">
  //           <Create />
  //         </Route>

  //         <Route exact path="/blogs/:id">
  //           <BlogDetails />
  //         </Route>

  //         <Route path="*">
  //           <NotFound />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // </>);

  return (<>
      <Router>
        <NavbarNew />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <HomeNew />
            </Route>

            <Route exact path="/create">
              <CreateNew />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetailsNew />
            </Route>
          </Switch>
        </div>

      </Router>
    </>)
}

export default App;
