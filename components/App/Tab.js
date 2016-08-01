import React from 'react'

export default class Tab extends React.Component{

	render(){

		return (

			<li className="col-md-3 col-sm-3 pull-left">
				<a href={this.props.url}>{this.props.name}</a>
			</li>
		)

	}


}