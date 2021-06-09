import React ,{useState,useEffect} from 'react'
import yelp from '../Api/Yelp'

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMsg,setErrorMsg]=useState("")
  
    const searchApi = async (searchTerm) => {
    
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "san jose",
          },
        });
        // console.log(response.data)
        setResults(response.data.businesses);  
    };
  
    useEffect(()=>{
        searchApi('pasta')
        
    },[])

    return [results]
}