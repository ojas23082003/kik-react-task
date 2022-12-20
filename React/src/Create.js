import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const History = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("new blog added");
            setIsPending(false);
            History.push('/');
        })
    }

    return (
        <>
            <h1>Create a new blog!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Blog title : </label>
                    <input type="text" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)} required/>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label>Blog body : </label>
                    <textarea className="form-control" value={body} onChange={(e)=> setBody(e.target.value)} required></textarea>
                </div>
                
                <div className="form-group">
                    <label>Blog author : </label>
                    <input type="text" className="form-control" value={author} onChange={(e)=> setAuthor(e.target.value)} required/>
                </div>
                { !isPending && <button className="btn btn-primary">Submit</button>}
                { isPending && <button className="btn btn-secondary" disabled>Loading..</button>}
            </form>
        </>
    )
}

export default Create;