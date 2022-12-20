import React from "react";
import useFetchNew from "./useFetchNew";
import BlogNew from "./BlogNew";
import Blog from "./Blog";

const HomeNew = () =>{
    const {data, isLoading, error, msg} = useFetchNew("http://localhost:8000/blogs");
    console.log(data)

    return (
        <>
            { isLoading && <h3>Loading...</h3>}
            { error && <h3>{msg}</h3>}
            { data && <BlogNew blogs={data}/>}
        </>
    )
}

export default HomeNew;