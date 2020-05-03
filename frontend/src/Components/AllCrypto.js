import React, {useState,useEffect} from 'react'
import axios from 'axios'
import dinero from '../Public/dinero.png'
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom'

import Listado from './Listado'
import Loader from 'react-loader-spinner'

function AllCrypto (){

    const [listado, setListado] = useState ([])
    const [loading, setLoading] = useState (false)
    
   

    const obtenerTop20 = () => {
        axios.get('http://localhost:5000/listarTodasCrypto').then((res) => {
        if(res !== null){
        console.log(res.data)  
        setListado(res.data)
        setLoading(false)
            }else{
                setLoading(true)
            }
            })
            .catch((error) =>{
                console.log(error);
            })  
        }

    





  useEffect(()=>{
      obtenerTop20();
      setLoading (true);
  }, [])

    const style={
        width : '70%',
        
    }

    const styleLoader={
        position:'absolute',
        top : '50%',
        left : '60%',
        
        marginLeft:'-300px'

        
    }
    return (    
        <div>  
        <br></br>
        <h1 align="center">Cryptomonedas en el mercado <img src={dinero}></img></h1>
        
            <div  align="center">
            <Link type="button" className="btn btn-secondary text-lg-center text-black-50" to="/" >VOLVER AL HOME</Link>
            
              <table className="table table-striped table-hover table-condensed mt-5" style={style}>
                <thead className="thead-dark">
                  <tr> 
                    <th scope="col"className="text text-center ">#</th>
                    <th scope="col"className="text text-center">Nombre</th> 
                    <th scope="col"className="text text-center">Simbolo</th> 
                    <th scope="col" className="text text-center">Precio</th> 
                    <th scope="col" className="text text-center">Detalles</th> 
                    
                </tr>
              </thead>
          <tbody>    
            
          {(loading) ? <div style={styleLoader} > <Loader 
          type="Watch"
          color ="#63696E"
          height={150}
          width={150}
          /> <h3>Cargando ... </h3></div> : 
          listado.map(thing => (
              <Listado
                key = {thing.id}
                thing = {thing}
              />
          ))
          }
            
            

          
          </tbody>
          </table>
    
          </div>
      </div>
            
  
    )
}

export default AllCrypto;