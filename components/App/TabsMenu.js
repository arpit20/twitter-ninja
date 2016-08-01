import React from 'react'
import Tab from './Tab'

export default  class TabsMenu extends React.Component {




	render() {

		return (
			
				<ul className="nav navbar-nav">
					{this.props.tabList.map(function(tab){
						return (

							<Tab
								url={tab.url}
								name={tab.name}
							>	

							</Tab>
						);

					})}

					
				</ul>

			

		)

	}

}

