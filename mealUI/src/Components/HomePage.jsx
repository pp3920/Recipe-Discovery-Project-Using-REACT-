
import React , {useState} from 'react';
import Category from './Category.jsx'

/*
Search Bar 
Extracting data from API
Passing data to show in meal card
*/

const HomePage = () => {

    {/* Storing  meal array into the data */}
    const [data , setData] = useState()
    const [search, setSearch] = useState()

    
    {/*Function for search of Meal from the API */}

    const FunSearchMeal =  async() =>
    {
        const get = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();  {/* waiting till it gets converting it into json format */ } 
        console.log(jsonData.meals);
        setData(jsonData.meals);  
        setMsg("")
    }
    
    {/*Function for search of Meal on Click */}

   
    const searchValue = (event) => {
        setSearch(event.target.value)

    } 
    
    
    return(
        
        <div>
    
             {/* creating search bar */}
            <div className = 'container'>
                <div className = 'searchBar'>
                    <input type = 'text' placeholder='Enter Dish...'  onChange={searchValue}/>
                    <button onClick = {FunSearchMeal}>Search</button>

                </div>

                <div>
                    {/* passing props */}
                    <Category detail = {data} />
                </div>




            </div>
            
            </div>
        
        
        
        
    )
}

export default HomePage;