import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

const BlogDetails = ({ isLoggedIn }) => {

    const [showAction, setShowAction] = useState(false);
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const [dislikes, setDislikes] =useState(0);
    const [likes, setLikes] =useState(0);
    const history = useHistory();


    
        useEffect(() => {
            
            if(!isLoading === true){
                setDislikes(blog.dislikes);
                setLikes(blog.likes)
                console.log("usestate run")
            }
            
          }, [isLoading, blog]);


    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                history.push("/");
            })

    };

    // buggy implementation
    const handleDislikeIcon = () => {
        console.log(dislikes)
        isLoggedIn ? setDislikes(dislikes + 1) : setShowAction(true)
    }

    //  buggy implementation 
    const handleLikeIcon = () => {
        console.log(likes)

        isLoggedIn ? setLikes(likes + 1) : setShowAction(true)
    }
    return (
        <div className="blog-details">
            {error && <div><h2>{error}</h2></div>}
            {isLoading && <div>Loading Posts....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>

                    <span>
                        <FontAwesomeIcon icon={faThumbsUp} size="2x" style={{ marginRight: "10" }} onClick={handleLikeIcon} /> Likes: {likes}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faThumbsDown} size="2x" style={{ marginLeft: "10" }} onClick={handleDislikeIcon} /> Dislikes: {dislikes}
                    </span>
                    <br/>
                    {showAction && <div> <em>You need to sign in to react to like/dislike</em> </div>}
                    <br /> <br />
                    <button onClick={handleDelete}>Delete Post</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;