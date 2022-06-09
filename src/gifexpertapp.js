//Imports
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//Componente
export const GifExpertApp = () => {

    //Variables
    //const categories = ['One Punch Man','Samurai X', 'Dragon Ball'];
    const [categories, setCategories]= useState(['Dragon Ball']);
   
    //funciones
    /*
    const handleAdd = () => {
        //setCategories( ['HunterXHunter',...categories]);
        //setCategories( [...categories,'HunterXHunter']);
        setCategories( categ => [...categ, 'HunterXHunter']);
    }
    */

    //Diseño del componente o acciones
    return(
        //fragment
        <>
            <h2>GIF Search for noobs</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr></hr>
                {
                    categories.map( category => {
                        //El Key no puede ser el indice y tiene que ser único
                        //manda categorias en los parametros al otro componente
                        return <GifGrid 
                                    key={category}
                                    category={category}
                                />
                    })
                }
        </>

    )

}