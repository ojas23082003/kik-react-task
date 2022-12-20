import { Link } from 'react-router-dom';

const Blog = (props) => {
    return (
        <>
            <h1 style={{fontFamily:'Ubuntu'}}>The blogs : </h1>
            {props.blogs.map((b) => (<>
                    <div className="content">
                        <Link to={`/blogs/${b.id}`}><h1 style={{ color: 'Red', fontFamily: 'Ubuntu' }}>{b.title}</h1></Link>
                        <p style={{ fontFamily: 'Ubuntu' }}>{b.body}</p>
                        <p>{b.author}</p>
                    </div></>
            ))}
        </>
    );
}

export default Blog;