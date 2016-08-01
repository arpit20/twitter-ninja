import React from 'react' 


export default class Header extends React.Component {

	render() {

		return (

			<nav className="navbar navbar-default" role="navigation">
				<div className="container-fluid">
					<ul className="nav navbar-nav pull-left">
						<li>
							<a  href="#">
								<img src="/open-iconic/svg/menu.svg" alt="Menu"/>
							</a>
						</li>	
					</ul>
						
						
					<a className="navbar-brand" href='#'> TwitterNinja</a>
					
					<ul className="nav navbar-nav pull-right">
						<li>	
							<a  href="#">
								<img src="/open-iconic/svg/magnifying-glass.svg" alt="search"/>
							</a>
						</li>		
							
					</ul>
				</div>
			</nav>
		);

	}


} 