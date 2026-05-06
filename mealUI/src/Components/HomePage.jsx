
import React , {useState} from 'react'
/*
Search Bar 
*/

const HomePage = () => {

    {/* Storing  meal array into the data */}
    const [data , setData] = useState()




    
    {/*Function for search of Meal from the API */}

    const FunSearchMeal =  async() =>
    {
        const get = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
        const jsonData = await get.json();  {/* waiting till it gets converting it into json format */ } 
        console.log(jsonData.meals)  
    }
    
    {/*Function for search of Meal on Click */}

    const searchValue = () =>
    {
        
    }
    
    
    
    return(
        
        <div>
    
             {/* creating search bar */}
            <div className = 'container'>
                <div className = 'searchBar'>
                    <input type = 'text' placeholder='Enter Dish'  onChange={searchValue}/>
                    <button onClick = {FunSearchMeal}>Search</button>

                </div>




            </div>
            
            </div>
        
        
        
        
    )
}

export default HomePage;