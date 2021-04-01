import { Link } from "react-router-dom"




const PageNotFound = () => {
    return ( 
        <div className="page-not-found">
            <div className="error-image">
            <h2 style={{color: 'white'}}>Page Not Found</h2> <br/>
            <strong>
            <p style={{color: 'white'}}>Sorry, The page or resource you requested doesn't exist</p></strong>
            <br/><br/>

            <Link to="/"style={{
                backgroundColor:"#f1356d", 
                color:"#fff", 
                border: "0",  
                padding: '8px', 
                borderRadius: "8px",
                cursor: "pointer"

                }}>Back to homepage</Link></div>    
        </div>
     );
}
 
export default PageNotFound;


