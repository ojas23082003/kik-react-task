import { Link } from "react-router-dom";

const BlogNew = ({blogs}) => {
    // const blogs = props.blogs;
    // console.log(blogs)
    return (
        <>
            <h1>All Blogs : </h1>
            {blogs.map((b)=>(
                <>
                    <Link to={`/blogs/${b.id}`}><h2 style={{color:'orange'}}>{b.title}</h2></Link>
                    <h4 style={{color:'gray'}}>{b.author}</h4>
                    <h6>{b.body}</h6>
                </>
            ))}
        </>
    )
}

export default BlogNew;