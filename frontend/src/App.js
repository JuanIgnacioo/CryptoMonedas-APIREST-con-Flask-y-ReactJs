import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Home from './Components/Home'
import Top20 from './Components/Top20'
import Top5 from './Components/Top5'
import InfoCoin from './Components/InfoCoin'
import AllCrypto from './Components/AllCrypto'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/top20" component ={Top20}/>
        <Route exact path = "/top5" component ={Top5}/>


        <Route exact path ="/infocoin/:id:cmc_rank:price" render ={
          props => {
            const codigoCoin = String((props.match.params.id));
            const codigoRank = String((props.match.params.cmc_rank))
            const codigoPrice = String((props.match.params.price))
            return (
            <InfoCoin
            id = {codigoCoin}
            rank = {codigoRank}
            precio = {codigoPrice}
            />
            )
          }
        }></Route>

        <Route exact path = "/allcryptos" component ={AllCrypto}/>
      

      </Switch>




    </Router>
  );
}

export default App;
