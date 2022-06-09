import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

//Parametros que recibe entre parentesis
export const GifGrid = ({category}) => {

    const { data:images, loading} = useFetchGifs(category);

    return(
        <>
            <h3>{category}</h3>
            {
                loading && <p>Loading</p>
            }

            {
                <div className="cardGrid">
                {
                    //cuando no usemos un return toca usar parentesis después de la arrorw function
                    images.map( img => ( 
                        <GifGridItem 
                            key={img.id}
                            {...img }
                        />
                    ))
                }
                </div> 
            }
        </>
    )
}