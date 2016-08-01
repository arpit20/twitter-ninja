import React from 'react' ;
import Footer from './Footer' ;
import Header from './Header'



export default class App extends React.Component {


	render(){
		return (
			<div>
				
				 <Header></Header>
				 <main>
	          			{this.props.children}
	        	</main>
	        	<Footer></Footer>
        	</div>

		);
	}


} 