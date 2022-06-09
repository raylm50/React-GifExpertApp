import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) => {

    //css personalizados
    //const cssButtonStart = 'btn btn-primary';
    //<button className= {cssButtonStart} type="button" onClick={ handleButtonEvent }>Button boostrap</button>
    
    //Variables
    const [inputValue, setInputValue] = useState(['']);

    //Funciones
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2)
        {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    //Componente estructura
    return(
        <>
            <form onSubmit={ handleFormSubmit }>
                <label htmlFor="inputValue">Enter a name GIF to Search</label>
                <input id="inputValue" type="text" value={inputValue} onChange= {handleInputChange} />
            </form>
        </>

    )
}
//validaciones proptypes 
//de un componente especifico
AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}