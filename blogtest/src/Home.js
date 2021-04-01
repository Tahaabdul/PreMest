import useFetch from './useFetch'
import BlogList from './BlogList';


const Home = ({isLoggedIn}) => {
    const {data :blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
    
    return (
        <div className="home">
        {error&& <div><h2>{error}</h2></div>}
        {isLoading && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="Recent Posts"/>}
        </div>
    );
}

export default Home;