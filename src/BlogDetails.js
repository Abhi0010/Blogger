import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blogs, pending, error} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {error && <div>{ error }</div>}
            {pending && <div>Loading..</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>    
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;