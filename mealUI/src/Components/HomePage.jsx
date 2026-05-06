
/*
Search Bar 
*/

const HomePage = () => {
    
    {/*Function for search of Meal */}

    const FunSearchMeal =  async() =>
    {
        const get = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
        const jsonData = await get.json();  {/* waiting till it gets converting it into json format */ } 
        console.log(jsonData)
    }
    
    
    
    
    return(
        
        <div>
    
             {/* creating search bar */}
            <div className = 'container'>
                <div className = 'searchBar'>
                    <input type = 'text' placeholder='Enter Dish'/>
                    <button onClick = {FunSearchMeal}>Search</button>

                </div>




            </div>
            
            </div>
        
        
        
        
    )
}

export default HomePage;