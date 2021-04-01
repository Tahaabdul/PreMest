import { Link } from "react-router-dom"



const PageNotFound = () => {
    return ( 
        <div className="PageNotFound">
            <h2>Page Not Found</h2> <br/>
            <p>Sorry, The page or resource you requested doesn't exist</p>
            <br/><br/>

            <Link to="/"style={{
                backgroundColor:"#f1356d", 
                color:"#fff", 
                border: "0",  
                padding: '8px', 
                borderRadius: "8px",
                cursor: "pointer"

                }}>Back to homepage</Link>
        </div>
     );
}
 
export default PageNotFound;


