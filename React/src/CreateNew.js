import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateNew = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [pending, setPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const blog = {title, body, author};
        setPending(true);

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            history.push("/");
            console.log("New blog added!");
            setPending(false);
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Blog title : </label>
                    <input type="text" className="form-control" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Blog author : </label>
                    <input type="text" className="form-control" required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Blog body : </label>
                    <textarea required className="form-control" value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                </div>
                
                { pending && <button type="submit" className="btn btn-secondary" disabled>Adding...</button>}
                {!pending && <button type="submit" className="btn btn-primary">Submit</button>}
            </form>
        </>
    )
}

export default CreateNew;