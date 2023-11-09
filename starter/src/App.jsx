const url = 'https://course-api.com/react-tours-project';
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Tours from "./Tours";



const App = () => {

  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchApi(){
    try{
      setLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    setTourData(data);
    console.log(data)
    }catch(error){
      console.log(error)
    }
    setLoading(false)
  }


useEffect(() =>{
fetchApi();
},[]);

const removeButton = (id) =>{
  const removeTour = tourData.filter((tour) => tour.id != id);
  setTourData(removeTour);
}

if(tourData.length === 0){
  return(
    <main>
      <h1>No Tours Left</h1>
      <button onClick={() => fetchApi()}>Refresh Page</button>
    </main>
  )
}

 return(
  <>
  <h1>Tours</h1>
  {loading ? <Loading /> : <Tours tours={tourData}  removeButton={removeButton}/>}
  </>
 )
};
export default App;
