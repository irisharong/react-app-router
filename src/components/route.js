import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from '../App';
import Header from './header'
import About from './about'
import Filter from './filter'

export default function  Routing () {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/filter" component={Filter} />
      </Switch>
    </Router>
  )
}

