import { useHistory, useParams } from "react-router-dom";
// import Blog from "./Blog";
import useFetch from "./useFetch";

const BlogDetails = () =>{
    const { id } = useParams();
    const {data , isLoading, msg, er} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            console.log('deleted object!');
            history.push('/');
        })
    }

    return (
        <>
            { isLoading && <div>Loading....</div>}
            { data && 
                <article>
                    <h2>{data.title}</h2>
                    <h4>{data.author}</h4>
                    <h6>{data.body}</h6>
                    <button className="btn btn-secondary" onClick={handleDelete}>Delete</button>
                </article>
            }
        </>
    )
}

export default BlogDetails;