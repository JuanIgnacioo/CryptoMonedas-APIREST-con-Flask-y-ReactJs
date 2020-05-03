import React, {useState, useEffect}from 'react'
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loader from 'react-loader-spinner'

function InfoCoin ({id,rank,precio}){

    const [listado, setListado] = useState ([])
    const [loading, setLoading] = useState(false)

   var number = id   
   var ranking = rank
  
    const buscarPorId =()=>{
        axios.post('http://localhost:5000/obtenerSegunId', {
            'id': number,
          })
          .then((res) => {
            if(res !== null){
            setListado(res.data)
            setLoading(false)
          }else{
            setLoading(true)
          }
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    const borrarCrypto = async() => {
      return axios
          .post("http://localhost:5000/borrarCrypto", {
             'rank': ranking
          })
          .then(res => {
              console.log(res.data)
              Swal.fire({
                title: 'Crypto moneda eliminada!',
                text: 'Se borro la cryptomoneda',
                imageUrl: 'https://www.fortuneenespanol.com/wp-content/uploads/2018/05/bitcoin-crash-fire.imgo_-770x513.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              }).then((result) =>{
                if (result.value){
                  let link = '/'
                  window.location.href = link
                }
              })
          })
          .catch(err => { throw err.response.data })
  }


    const style={
        width : '70%'
    }

    const styleLoader={
      position:'absolute',
      top : '50%',
      left : '60%',
      
      marginLeft:'-300px'

      
  }

    useEffect(()=>{
        buscarPorId();
        setLoading(true)
    },[])



    return (
      <div>
      {(loading) ? <div style={styleLoader} > <Loader 
          type="Watch"
          color ="#63696E"
          height={150}
          width={150}
          /> <h3>Cargando ... </h3></div> : 
          <div align="center">
            <h1> Informacion de la criptomoneda</h1>
            <Link type="button" className="btn btn-secondary text-lg-center text-black-50" to="/" >VOLVER AL HOME</Link>
            <table className="table table-striped table-hover table-condensed mt-5" style={style}>
                <thead className="thead-dark">
                  <tr> 
                    <th scope="col"className="text text-center ">#</th>
                    <th scope="col"className="text text-center">Nombre</th> 
                    <th scope="col"className="text text-center">Simbolo</th> 
                    <th scope="col" className="text text-center">Precio</th>
                    <th scope="col" className="text text-center">Eliminar Crypto</th>
                    <th scope="col" className="text text-center">Volver al listado completo</th>
                    <th scope="col" className="text text-center">Listado top 20</th> 
                    <th scope="col" className="text text-center">listado top 5</th> 
                </tr>
              </thead>


              <tbody>
              <tr className="font-weight-bold  text-black-50">
                    <td className="text-lg-center">{listado.cmc_rank}</td>
                    <td className="text-lg-center">{listado.name}</td>
                    <td className="text-lg-center">{listado.symbol}</td>
                    <td className="text-lg-center">$ {precio}</td>       
                    
                    <td>
                    <button type="button" className="btn btn-danger" onClick={() => borrarCrypto()} >Eliminar</button></td>
                    <td>
                    <Link type="button" className="btn btn-primary text-lg-center" to="/allcryptos" >Listado completo</Link> 
                    </td>
                    <td className="text-lg-center">
                    <Link type="button" className="btn btn-primary text-lg-center" to="/top20" >Top 20</Link> 
                    </td>
                    <td className="text-lg-center">
                    <Link type="button" className="btn btn-primary text-lg-center" to="/top5" >top 5</Link> 
                    </td>
                    
                </tr>
              </tbody>
              
          </table>

        </div>
      }

</div>
        
    )
}
export default InfoCoin;