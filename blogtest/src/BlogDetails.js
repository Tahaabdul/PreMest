import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
 const { id } = useParams();
 const {data:blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
 const history = useHistory();

const handleClick = () =>{
    fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",})
        .then(() => {
            history.push("/");
        })

    };

 return ( 
        <div className="blog-details">
        {error&& <div><h2>{error}</h2></div>}
        {isLoading && <div>Loading Posts....</div>}
        {blog && (
            <article>
            <h2>{blog.title}</h2>
            <p>Written By: {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete</button>
            </article>
        )}
        </div>
     );
}
 
export default BlogDetails;