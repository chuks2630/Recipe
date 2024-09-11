import Banner from "./Recipe_components/Banner";
import Copyright from "./Recipe_components/Copyright";
import Nav from "./Recipe_components/Nav";
import Footer from "./Recipe_components/Footer";
import List from "./Recipe_components/List";

import axios from "axios";
import { useEffect, useState } from "react";
const RecipeApp = ()=>{

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [frecipe, setFRecipe] = useState([]);

    useEffect(()=>{
       makeApiCall()
    }, [])

    //this function will do the filtering
   const handleFilter = ()=>{
    const filtered_recipes = recipes.filter((recipe)=>{
        return recipe.name.toLowerCase().includes(keyword.toLowerCase())
    })

    setFRecipe(filtered_recipes)
   }

    function makeApiCall(){
        axios.get("https://dummyjson.com/recipes")
        .then(function(resp){
            console.log(resp.data.recipes)
            setLoading(false)
            setRecipes(resp.data.recipes)
        })
        .catch(function(err){
            console.log(err)
            setLoading(false);
            setError(true)
            
        })
       
    }
    return (
        <div className="container-fluid">
            <Nav/>
            <Banner setKeyword = {setKeyword} keyword={keyword} handleFilter={handleFilter}/>
            <List loading = {loading} error = {error} recipes = {recipes} frecipe= {frecipe} keyword={keyword}/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default RecipeApp;
