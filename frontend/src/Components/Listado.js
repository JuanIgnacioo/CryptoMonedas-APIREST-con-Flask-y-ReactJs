import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom'

import axios from 'axios'
const  Listado  = ({thing}) =>{
    
    const [verCoin, setVer] = useState ('false')
    const [eliminar, setEliminar] = useState (false)

    if ( verCoin === 'true'){
        return(<Redirect to={`/infocoin/${thing.id}${thing.cmc_rank}${thing.quote.USD.price}`}/>)

    }

    
    

    return (

        <tr className="font-weight-bold  text-black-50">
        <td className="text-lg-center">{thing.cmc_rank}</td>
        <td className="text-lg-center">{thing.name}</td>
        <td className="text-lg-center">{thing.symbol}</td>
    <td className="text-lg-center">${thing.quote.USD.price}</td>       
        <td className="text-lg-center">
        <button type="button" className="btn btn-primary text-lg-center" onClick={()=> setVer('true')}>Ver detalles</button> 
        </td>
        
    </tr>
  
    )
}

export default Listado;