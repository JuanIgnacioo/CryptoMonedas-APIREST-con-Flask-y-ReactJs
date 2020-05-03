import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import '../Public/Menu.css'
import dollarface from '../Public/dollarface.png'

function Home (){
    return (
        <div>
        <div class="jumbotron-fluid" align="center">
            <h1 class="display-4">Cripto monedas!   <img src={dollarface} >
            </img></h1>
            <p class="lead">Obtenga la informacion mas reciente del mercado de las criptomonedas. </p>
            <hr class="my-4"/>         
        

        
        <ul class="test-menu">
                <li class="test-menu__item">
                  <Link to="/allcryptos">
                  <a class="test-menu__link" title="example">
                    Ver Criptomonedas 
                  </a>
                  </Link>
                </li>
                
                <li class="test-menu__item">
                <Link to="/top5">
                  <a class="test-menu__link"  title="example">
                    Top 5 
                  </a>
                </Link>
                </li>

                <li class="test-menu__item">
                  <Link to="/top20">
                  <a class="test-menu__link"  title="example">
                    Top 20 
                  </a>
                  </Link>
                </li>              

                <li class="test-menu__item">
                  <Link to ='/'>
                  <a class="test-menu__link" title="example">
                    Home 
                  </a>
                  </Link>
                </li>
              </ul>      

              </div>
        </div>
     
    )
}
export default Home;