import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
//hooks solo son funciones
//no retornan
//no se usa React 
//funcionan como funtional components
export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=> {     
        getGifs(category).then(images =>{ 
            setTimeout(() => {
                setState({
                    data: images,
                    loading: false
                });
            }, 1500);
        })
    },[category])

    return state; //{ data[], loading: true}
}