import React from 'react' ;
import { Router, Route,IndexRoute } from 'react-router' 

import TwitterNinjaApp from './components/App/TwitterNinjaApp' 

import Home from './components/Home/Home' 




export default (
			<Route path="/" component={TwitterNinjaApp}>
				<IndexRoute component={Home}/>
			</Route>
)


