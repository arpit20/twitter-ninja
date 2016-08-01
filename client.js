import React from 'react' ;
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router' ;

import routes from './routes' ;
import ContextWrapper from './components/common/ContextWrapper' ;

process.APP_STATE = window.APP_STATE || {};
console.log(window.APP_STATE);

ReactDOM.render((
	<ContextWrapper data={window.APP_STATE || {}}>	
		<Router history={browserHistory}>
			{routes}
		</Router>
	</ContextWrapper>
		
			
	),
  	document.getElementById('twitter-ninja-app'))
