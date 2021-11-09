import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [pending, setPending] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
            })
    },[]);

    return ( 
        <div className="home">
            {pending && <div>Loading..</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
} 
 
export default Home;