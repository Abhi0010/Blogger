import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [pending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author}
        setPending(true);

        fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setPending(false);
    //   history.go(-1);
      history.push('/');
    });
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text" required
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}} 
                />
                <label>Blog Content</label>
                <textarea
                    rows="10" cols="200"
                    required
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                > </textarea> 
                <label>Blog Author</label>
                <input 
                    type="text" required
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}} 
                />
                { !pending && <button>Add Blog</button>}
                { pending && <button disabled>Adding..</button>}
            </form>
        </div>
     );
}
 
export default Create;