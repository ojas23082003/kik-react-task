import { useParams } from "react-router-dom";
import useFetchNew from "./useFetchNew";

const BlogDetailsNew = () =>{
    const {id} = useParams();
    const {data, isLoading, error, msg} = useFetchNew("http://localhost:8000/blogs/"+id);

    return (
        <>
        {isLoading && <h1>Loading...</h1>}
        {data && <div className="details">
            <h2>{data.title}</h2>
            <h3>{data.author}</h3>
            <h4>{data.body}</h4></div>}
        {error && <p>{msg}</p>}
        </>
    )
}

export default BlogDetailsNew;